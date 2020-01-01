import {NPC, NPCUtil} from './npc.util';

describe('NPCUtil', () => {
  it('Can fetch data for mob', async () => {
    const npcId = 90517;
    const npc: NPC = await NPCUtil.getById(npcId);
    expect(npc.id).toBe(npcId);
    expect(npc.name.en_GB).toBe('Felbound Wolf');
    expect(npc.name.fr_FR).toBe('Loup gangre-lié');
    expect(npc.coordinates[0].x).toBe(25.4);
    expect(npc.coordinates[0].y).toBe(76.4);
    expect(npc.coordinates.length).toBe(23);
    expect(npc.expansionId).toBe(5);
    expect(npc.drops.length).toBe(182);
    const tanaanJungleTooth = npc.drops.filter(d => d.id === 128438)[0];
    // console.log(tanaanJungleTooth);
    expect(tanaanJungleTooth.id).toBe(128438);
    expect(tanaanJungleTooth.dropped).toBe(242007);
    expect(tanaanJungleTooth.dropChance).toBe(.4612697129918003);
  });

  it('Can fetch data for vendor', async () => {
    const npcId = 3313;
    const npc: NPC = await NPCUtil.getById(npcId);
    expect(npc.id).toBe(npcId);
    expect(npc.name.en_GB).toBe('Trak\'gen');
    expect(npc.name.fr_FR).toBe('Trak\'gen');
    expect(npc.coordinates[0].x).toBe(53.4);
    expect(npc.coordinates[0].y).toBe(82);
    expect(npc.coordinates.length).toBe(2);
    expect(npc.expansionId).toBe(0);
    expect(npc.sells.length).toBe(16);

    const sweetNectar = npc.sells.filter(d => d.id === 1708)[0];
    expect(sweetNectar.id).toBe(1708);
    expect(sweetNectar.stackSize).toBe(5);
    expect(sweetNectar.stock).toBe(-1);
    expect(sweetNectar.price).toBe(1000);
    expect(sweetNectar.unitPrice).toBe(200);
    expect(sweetNectar.currency).toBeFalsy();
  });

  it('Can fetch data for a vendor selling with item as currency', async () => {
    const npcId = 66678;
    const npc: NPC = await NPCUtil.getById(npcId);
    expect(npc.id).toBe(npcId);
    expect(npc.name.en_GB).toBe('Krystel');
    expect(npc.zoneId).toBe(5840);
    expect(npc.coordinates[0].x).toBe(84.6);
    expect(npc.coordinates[0].y).toBe(60.4);
    expect(npc.coordinates.length).toBe(2);
    expect(npc.expansionId).toBe(4);
    expect(npc.sells.length).toBe(14);

    const blackTrilliumOre = npc.sells.filter(d => d.id === 72094)[0];
    expect(blackTrilliumOre.id).toBe(72094);
    expect(blackTrilliumOre.stackSize).toBe(5);
    expect(blackTrilliumOre.stock).toBe(-1);
    expect(blackTrilliumOre.price).toBe(1);
    expect(blackTrilliumOre.unitPrice).toBe(.2);
    expect(blackTrilliumOre.currency).toBe(76061);
  });

  it('Can fetch data for a vendor selling limited supply item', async () => {
    const npcId = 6568;
    const npc: NPC = await NPCUtil.getById(npcId);
    expect(npc.id).toBe(npcId);
    expect(npc.name.en_GB).toBe('Vizzklick');
    expect(npc.isAlliance).toBeTruthy();
    expect(npc.isHorde).toBeTruthy();
    expect(npc.minLevel).toBe(43);
    expect(npc.maxLevel).toBe(60);
    expect(npc.tag.de_DE).toBe('Schneiderbedarf');
    expect(npc.tag.en_GB).toBe('Tailoring Supplies');
    expect(npc.zoneId).toBe(440);
    expect(npc.coordinates[0].x).toBe(50.6);
    expect(npc.coordinates[0].y).toBe(28.6);
    expect(npc.coordinates.length).toBe(1);
    expect(npc.expansionId).toBe(0);
    expect(npc.sells.length).toBe(18);

    const crimsonRobePattern = npc.sells.filter(d => d.id === 7088)[0];
    expect(crimsonRobePattern.id).toBe(7088);
    expect(crimsonRobePattern.stackSize).toBe(1);
    expect(crimsonRobePattern.stock).toBe(1);
    expect(crimsonRobePattern.price).toBe(5000);
    expect(crimsonRobePattern.unitPrice).toBe(5000);
    expect(crimsonRobePattern.currency).toBeFalsy();
  });

  it('Can handle skinning', async () => {
    const npcId = 135510;
    const npc: NPC = await NPCUtil.getById(npcId);
    expect(npc.id).toBe(npcId);
    expect(npc.name.en_GB).toBe('Azuresail the Ancient');
    expect(npc.isAlliance).toBeFalsy();
    expect(npc.isHorde).toBeFalsy();
    expect(npc.minLevel).toBe(115);
    expect(npc.maxLevel).toBe(120);
    expect(npc.tag.en_GB).toBeFalsy();
    expect(npc.skinning.length).toBe(6);

    const shimmerScale = npc.skinning.filter(d => d.id === 153050)[0];
    expect(shimmerScale.id).toBe(153050);
    expect(shimmerScale.dropChance).toBe(1);
  });
});
