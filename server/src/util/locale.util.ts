import {ItemLocale} from '../models/item/item-locale';
import * as mysql from 'mysql';
import {DATABASE_CREDENTIALS} from './secrets';
import {LocaleQuery} from '../queries/locale.query';
import * as RequestPromise from 'request-promise';
import {Endpoints} from '../endpoints';

/**
 * Sets the locale for the request, if no locale is defined, it will either use en_GB or the users browser locale if possible
 * @param {*} request
 */

export const getLocale = (request: any) => {
  // req.headers['accept-language']
  if (request.query && request.query.locale) {
    return request.query.locale;
  }
  return 'en_GB';
};

export class LocaleUtil {
  private static locales = {
    eu: ['en_GB', 'de_DE', 'es_ES', 'fr_FR', 'it_IT', 'pl_PL', 'pt_PT', 'ru_RU'],
    us: ['en_US', 'es_MX', 'pt_BR']
  };

  public static async setLocales(id: any, idName: string, tableName: string, apiPath: string): Promise<any> {
    const data: ItemLocale = new ItemLocale(id);

    await this.fetchLocales(id, data, apiPath);
    console.log('data after for each', data);

    this.insertToDB(tableName, idName, data);
    return data;
  }

  private static insertToDB(tableName: string, idName: string, data: ItemLocale) {
    try {
      const connection = mysql.createConnection(DATABASE_CREDENTIALS);
      connection.query(LocaleQuery.insert(tableName, idName, data),
        (err) => {
          if (!err) {
            console.log(`Locale added to db for ${data.en_GB}`);
          } else {
            console.error(`Locale not added to db for ${data.en_GB}`, err);
          }
          connection.end();
        });
      //
    } catch (e) {
      //
    }
  }

  private static async fetchLocales(id: any, data: ItemLocale, apiPath: string) {
    return Promise.all(
      this.parseRegions(
        id,
        data,
        apiPath)
    );
  }

  private static getLocalePromises(array: string[], id: number, locales: ItemLocale, region: string, apiPath: string) {
    return array
      .map(locale => RequestPromise.get(
        new Endpoints()
          .getPath(`${apiPath}/${id}?locale=${locale}`, region), (r, e, b) => {
          try {
            locales[locale] = JSON.parse(b).name;
          } catch (e) {
            locales[locale] = '404';
          }
        }));
  }

  private static parseRegions(id: any, data: ItemLocale, apiPath: string) {
    return Object.keys(LocaleUtil.locales).map(region =>
      Promise.all(
        this.getLocalePromises(
          LocaleUtil.locales[region],
          id,
          data,
          region,
          apiPath)
      ));
  }
}
