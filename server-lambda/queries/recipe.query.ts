import {Recipe} from '../models/crafting/recipe';
import {safeifyString} from '../utils/string.util';
import {getLocale} from '../utils/locale.util';

export class RecipeQuery {
  public static update(recipe: Recipe) {
    return `
          UPDATE recipes
          SET
            json = "${safeifyString(JSON.stringify(recipe))}",
            timestamp = CURRENT_TIMESTAMP
          WHERE id = ${recipe.spellID};`;
  }

  public static insert(id: number, recipe) {
    return `INSERT INTO recipes VALUES(${
      id
      }, "${
      safeifyString(JSON.stringify(recipe))
      }", CURRENT_TIMESTAMP);`;
  }

  public static getSelectIdFromRecipesWhereIdNotInSelectIdFromRecipeNameLocale(): string {
    return `SELECT id
            FROM recipes
            WHERE id NOT IN
                  (
                    SELECT id
                    FROM recipe_name_locale);`;
  }

  public static getAllRecipesAfterTimestamp(locale: string, timestamp: Date) {
    return `
      SELECT r.id, json, ${getLocale(locale)} as name, timestamp from  recipes as r
      LEFT OUTER JOIN recipe_name_locale as l
      ON r.id = l.id
      WHERE json NOT LIKE '%itemID":0%'
      AND timestamp > "${timestamp + ''}"
      ORDER BY timestamp desc;`;
  }

  public static getById(id: number) {
    return `SELECT json
            FROM recipes
    WHERE id = ${id}`;
  }

  public static getItemWithSimilarName(recipe) {
    return `select id from items where name like "%${recipe.name}%" limit 1;`;
  }
}
