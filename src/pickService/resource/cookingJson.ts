export type CookingJson = {
  iconId: string,
  name: string,
  category: string,
  foodCandidates?: ReadonlyArray<string>,
  recipe: string,
  season?: string,
  lockType?: string,
  addVersion?: string,
};

export const cookingJson: ReadonlyArray<CookingJson> = [
	{
		"iconId": "002",
		"name": "玄米飯",
		"category": "主食",
		"recipe": "玄米×3"
	},
	{
		"iconId": "001",
		"name": "分搗飯",
		"category": "主食",
		"recipe": "分搗米×3"
	},
	{
		"iconId": "003",
		"name": "白飯",
		"category": "主食",
		"recipe": "白米×3"
	},
	{
		"iconId": "002",
		"name": "強飯",
		"category": "主食",
		"recipe": "白米×3, 塩×1, <酒>×1"
	},
	{
		"iconId": "040",
		"name": "山菜強飯",
		"category": "主食",
		"recipe": "白米×3, 蕨×2, 塩×1, <酒>×1"
	},
	{
		"iconId": "041",
		"name": "栗強飯",
		"category": "主食",
		"recipe": "白米×3, 栗×2, 塩×1, <酒>×1",
		"season": "秋"
	},
	{
		"iconId": "042",
		"name": "銀杏強飯",
		"category": "主食",
		"recipe": "白米×3, 銀杏×2, 塩×1, <酒>×1",
		"season": "秋"
	},
	{
		"iconId": "043",
		"name": "焼飯",
		"category": "主食",
		"recipe": "白米×3, 醤油×1, 油×1"
	},
	{
		"iconId": "004",
		"name": "赤飯",
		"category": "主食",
		"recipe": "白米×3, 豆×2, 塩×2, 胡麻×1"
	},
	{
		"iconId": "044",
		"name": "五穀飯",
		"category": "主食",
		"recipe": "<米>×3, <米>×3, 麦×1, 粟×1, 稗×1, 豆×1"
	},
	{
		"iconId": "045",
		"name": "粟飯",
		"category": "主食",
		"recipe": "粟×3"
	},
	{
		"iconId": "002",
		"name": "麦飯",
		"category": "主食",
		"recipe": "麦×3"
	},
	{
		"iconId": "045",
		"name": "稗飯",
		"category": "主食",
		"recipe": "稗×3"
	},
	{
		"iconId": "046",
		"name": "干飯",
		"category": "主食",
		"recipe": "干飯×1"
	},
	{
		"iconId": "046",
		"name": "**粥",
		"category": "主食",
		"foodCandidates": [
			"玄米",
			"分搗米",
			"白米",
			"麦",
			"粟",
			"稗"
		],
		"recipe": "**×1, 塩×1"
	},
	{
		"iconId": "047",
		"name": "七草粥",
		"category": "主食",
		"recipe": "<穀>×1, 七草×1, 塩×1",
		"season": "春"
	},
	{
		"iconId": "048",
		"name": "**の増水",
		"category": "主食",
		"foodCandidates": [
			"玄米",
			"分搗米",
			"白米",
			"麦",
			"粟",
			"稗"
		],
		"recipe": "**×2, <菜>×1, 出汁×1"
	},
	{
		"iconId": "049",
		"name": "**茶漬",
		"category": "主食",
		"foodCandidates": [
			"玄米",
			"分搗米",
			"白米",
			"麦",
			"粟",
			"稗"
		],
		"recipe": "**×2, <薬味>×1, 茶×1, 出汁×1, 醤油×1"
	},
	{
		"iconId": "050",
		"name": "鮭茶漬",
		"category": "主食",
		"recipe": "白米×2, 鮭×1, <薬味>×1, 茶×1, 出汁×1, 醤油×1"
	},
	{
		"iconId": "051",
		"name": "松茸茶漬",
		"category": "主食",
		"recipe": "白米×2, 松茸×1, <薬味>×1, 茶×1, 出汁×1, 醤油×1",
		"season": "秋"
	},
	{
		"iconId": "048",
		"name": "戻増水",
		"category": "主食",
		"recipe": "<菜>×1, 出汁×1, 干飯×2",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "052",
		"name": "炙餅",
		"category": "主食",
		"recipe": "餅×1"
	},
	{
		"iconId": "005",
		"name": "**丼",
		"category": "主食",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉",
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆"
		],
		"recipe": "**×2, <穀>×3, 砂糖×1, 醤油×1, <酒>×1"
	},
	{
		"iconId": "053",
		"name": "鴨玉丼",
		"category": "主食",
		"recipe": "鴨肉×2, 卵×1, <穀>×3, 砂糖×1, 醤油×1, <酒>×1"
	},
	{
		"iconId": "054",
		"name": "**天丼",
		"category": "主食",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉",
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆",
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**×2, 卵×1, <穀>×3, 麦×1, 砂糖×1, 醤油×1, 油×1, <酒>×1"
	},
	{
		"iconId": "055",
		"name": "饂飩",
		"category": "主食",
		"recipe": "麦×3, 塩×1"
	},
	{
		"iconId": "056",
		"name": "きつね饂飩",
		"category": "主食",
		"recipe": "麦×3, 塩×1, 油×2, 豆腐×1"
	},
	{
		"iconId": "057",
		"name": "天麩羅饂飩",
		"category": "主食",
		"recipe": "<肉/魚/菜>×1, 卵×1, 麦×4, 塩×1, 油×3"
	},
	{
		"iconId": "058",
		"name": "索麺",
		"category": "主食",
		"recipe": "麦×2, 塩×1, 油×1"
	},
	{
		"iconId": "006",
		"name": "蕎麦切",
		"category": "主食",
		"recipe": "蕎麦×3, 出汁×1"
	},
	{
		"iconId": "059",
		"name": "たぬき蕎麦切",
		"category": "主食",
		"recipe": "麦×1, 蕎麦×3, 出汁×1, 油×1"
	},
	{
		"iconId": "060",
		"name": "山菜蕎麦切",
		"category": "主食",
		"recipe": "蕎麦×3, 蕨×2, 出汁×1"
	},
	{
		"iconId": "061",
		"name": "天麩羅蕎麦切",
		"category": "主食",
		"recipe": "卵×1, 麦×1, 蕎麦×3, <肉/魚/菜>×1, 出汁×1, 油×3"
	},
	{
		"iconId": "007",
		"name": "パンネクック",
		"category": "主食",
		"recipe": "卵×3, 麦×3, 豚肉の燻製×1, チーズ×1",
		"lockType": "Ventania"
	},
	{
		"iconId": "009",
		"name": "**汁",
		"category": "汁",
		"foodCandidates": [
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**×2"
	},
	{
		"iconId": "062",
		"name": "**の雑煮",
		"category": "汁",
		"foodCandidates": [
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**×1, 出汁×1, 醤油×1, 餅×1, <酒類>×1"
	},
	{
		"iconId": "009",
		"name": "蓼水汁",
		"category": "汁",
		"recipe": "味噌×1"
	},
	{
		"iconId": "063",
		"name": "**の味噌汁",
		"category": "汁",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉",
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**×1, 出汁×1, 味噌×1"
	},
	{
		"iconId": "063",
		"name": "芋がらの味噌汁",
		"category": "汁",
		"recipe": "出汁×1, 芋がら縄×1"
	},
	{
		"iconId": "064",
		"name": "**の毛切汁",
		"category": "汁",
		"foodCandidates": [
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆"
		],
		"recipe": "**×1, <薬味>×1, 出汁×1, 味噌×1"
	},
	{
		"iconId": "065",
		"name": "味噌炙汁",
		"category": "汁",
		"recipe": "根菜×1, 出汁×1, 味噌×1, 豆腐×1"
	},
	{
		"iconId": "066",
		"name": "青搗汁",
		"category": "汁",
		"recipe": "雉肉×1, <薬味>×1, 出汁×1, 味噌×1"
	},
	{
		"iconId": "065",
		"name": "豚汁",
		"category": "汁",
		"recipe": "豚肉×1, 根菜×1, 葱×1, 出汁×1, 味噌×1"
	},
	{
		"iconId": "009",
		"name": "胡瓜の冷汁",
		"category": "汁",
		"recipe": "胡瓜×1, 胡麻×1, 出汁×1, 味噌×1, 清水×1",
		"season": "夏"
	},
	{
		"iconId": "065",
		"name": "けんちん汁",
		"category": "汁",
		"recipe": "芋×1, 根菜×1, 茸×1, 出汁×1, 油×1, 豆腐×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "067",
		"name": "**の摘入汁",
		"category": "汁",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉",
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆"
		],
		"recipe": "**×2, 卵×1, 麦×1, 根菜×1, 生姜×1, 出汁×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "068",
		"name": "鯉の濃醤",
		"category": "汁",
		"recipe": "鯉×1, 葱×1, 味噌×2, <酒>×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "068",
		"name": "泥鰌の濃醤",
		"category": "汁",
		"recipe": "泥鰌×1, 葱×1, 味噌×2, <酒>×1",
		"season": "冬",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "068",
		"name": "鮒の濃醤",
		"category": "汁",
		"recipe": "鮒×1, 葱×1, 味噌×2, <酒>×1",
		"season": "秋",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "068",
		"name": "鰻の濃醤",
		"category": "汁",
		"recipe": "鰻×1, 葱×1, 味噌×2, <酒>×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "010",
		"name": "エルテンスープ",
		"category": "汁",
		"recipe": "卵×1, 豆×1, 馬鈴薯×1, 玉葱×1, 豚肉の燻製×1",
		"season": "冬"
	},
	{
		"iconId": "011",
		"name": "**の炙焼",
		"category": "菜",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉",
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆",
			"蜂の子",
			"蝗"
		],
		"recipe": "**×2"
	},
	{
		"iconId": "069",
		"name": "松茸の一本焼き",
		"category": "菜",
		"recipe": "松茸×1, 塩×1",
		"season": "秋",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "012",
		"name": "**の浸物",
		"category": "菜",
		"foodCandidates": [
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**×2, 出汁×1"
	},
	{
		"iconId": "070",
		"name": "**の酢和",
		"category": "菜",
		"foodCandidates": [
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**×1, 塩×1, 酢×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "070",
		"name": "**の胡麻酢和",
		"category": "菜",
		"foodCandidates": [
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**×1, 塩×1, 胡麻×1, 酢×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "070",
		"name": "**の酢味噌和",
		"category": "菜",
		"foodCandidates": [
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆"
		],
		"recipe": "**×1, 胡麻×1, 味噌×1, 酢×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "013",
		"name": "**の塩焼",
		"category": "菜",
		"foodCandidates": [
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆"
		],
		"recipe": "**×2, 塩×1"
	},
	{
		"iconId": "071",
		"name": "銀杏の串焼",
		"category": "菜",
		"recipe": "銀杏×2, 塩×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "072",
		"name": "蜂の子の串焼",
		"category": "菜",
		"recipe": "蜂の子×2, 塩×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "073",
		"name": "蝗の串焼",
		"category": "菜",
		"recipe": "蝗×2, 塩×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "012",
		"name": "**の塩茹",
		"category": "菜",
		"foodCandidates": [
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**×2, 塩×1, 出汁×1"
	},
	{
		"iconId": "074",
		"name": "鰻の白蒸",
		"category": "菜",
		"recipe": "鰻×1, 塩×1",
		"season": "冬"
	},
	{
		"iconId": "014",
		"name": "**の白干",
		"category": "菜",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉"
		],
		"recipe": "**の白干×1"
	},
	{
		"iconId": "075",
		"name": "**の酒漬焼",
		"category": "菜",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉"
		],
		"recipe": "**の白干×2, <酒>×1"
	},
	{
		"iconId": "015",
		"name": "**の燻製",
		"category": "菜",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉"
		],
		"recipe": "**の燻製×1"
	},
	{
		"iconId": "012",
		"name": "**の糠漬",
		"category": "菜",
		"foodCandidates": [
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**の糠漬×1"
	},
	{
		"iconId": "016",
		"name": "**の鮨",
		"category": "菜",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉",
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆"
		],
		"recipe": "**の鮨×1"
	},
	{
		"iconId": "017",
		"name": "**の煮凝",
		"category": "菜",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉",
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆"
		],
		"recipe": "**×1, 醤油×1, <酒>×1"
	},
	{
		"iconId": "076",
		"name": "**の醤油漬",
		"category": "菜",
		"foodCandidates": [
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆"
		],
		"recipe": "**×2, 昆布×1, 醤油×1, <酒>×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "018",
		"name": "煎り団栗",
		"category": "菜",
		"recipe": "団栗×5",
		"season": "秋"
	},
	{
		"iconId": "077",
		"name": "納豆",
		"category": "菜",
		"recipe": "豆×5"
	},
	{
		"iconId": "078",
		"name": "味噌田楽",
		"category": "菜",
		"recipe": "味噌×1, 豆腐×1",
		"season": "冬"
	},
	{
		"iconId": "079",
		"name": "煮込み田楽",
		"category": "菜",
		"recipe": "<魚>×3, 卵×1, 芋×1, 根菜×1, 出汁×1, 豆腐×1",
		"season": "冬",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "080",
		"name": "**の時雨煮",
		"category": "菜",
		"foodCandidates": [
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆",
			"蜂の子",
			"蝗"
		],
		"recipe": "**×2, 生姜×1, 砂糖×1, 醤油×1, <酒>×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "081",
		"name": "芋の煮転",
		"category": "菜",
		"recipe": "芋×2, 砂糖×1, 醤油×1, <酒>×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "081",
		"name": "馬鈴薯の煮転",
		"category": "菜",
		"recipe": "馬鈴薯×2, 砂糖×1, 醤油×1, <酒>×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "019",
		"name": "冷奴",
		"category": "菜",
		"recipe": "生姜×1, 醤油×1, 豆腐×1",
		"season": "夏"
	},
	{
		"iconId": "082",
		"name": "焼き玉黍",
		"category": "菜",
		"recipe": "玉黍×1, 砂糖×1, 醤油×1",
		"season": "夏"
	},
	{
		"iconId": "083",
		"name": "山葵漬",
		"category": "菜",
		"recipe": "山葵漬×1",
		"season": "春"
	},
	{
		"iconId": "084",
		"name": "**の山葵焼",
		"category": "菜",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉"
		],
		"recipe": "**×2, 山葵×1, 塩×1",
		"season": "春"
	},
	{
		"iconId": "020",
		"name": "梅干",
		"category": "菜",
		"recipe": "梅干×1",
		"season": "夏"
	},
	{
		"iconId": "021",
		"name": "玉子焼",
		"category": "菜",
		"recipe": "卵×2, <塩/砂糖/出汁/醤油>×1"
	},
	{
		"iconId": "085",
		"name": "茶碗蒸",
		"category": "菜",
		"recipe": "卵×1, 銀杏×1, 出汁×1"
	},
	{
		"iconId": "086",
		"name": "湯豆腐",
		"category": "菜",
		"recipe": "昆布×1, 清水×1, 豆腐×1",
		"season": "冬"
	},
	{
		"iconId": "087",
		"name": "**の白和",
		"category": "菜",
		"foodCandidates": [
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**×1, 胡麻×1, 出汁×1, 豆腐×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "088",
		"name": "干塩鮭",
		"category": "菜",
		"recipe": "干塩鮭×1",
		"season": "冬"
	},
	{
		"iconId": "022",
		"name": "**の素揚",
		"category": "菜",
		"foodCandidates": [
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**×1, 油×3"
	},
	{
		"iconId": "022",
		"name": "**の空揚",
		"category": "菜",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉",
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆"
		],
		"recipe": "**×2, 麦×1, 油×3"
	},
	{
		"iconId": "022",
		"name": "**の天麩羅",
		"category": "菜",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉",
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆",
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**×2, 卵×1, 麦×1, 油×3"
	},
	{
		"iconId": "089",
		"name": "**の煮物",
		"category": "菜",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉",
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆",
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**×1, 砂糖×1, 醤油×1"
	},
	{
		"iconId": "090",
		"name": "**の味噌煮",
		"category": "菜",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉",
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆",
			"団栗",
			"芋",
			"馬鈴薯",
			"玉葱",
			"蕨",
			"土筆",
			"蓬",
			"七草",
			"根菜",
			"胡瓜",
			"玉黍",
			"茸",
			"松茸",
			"栗",
			"銀杏",
			"柿"
		],
		"recipe": "**×1, 生姜×1, 砂糖×1, 味噌×1"
	},
	{
		"iconId": "091",
		"name": "芋がらの煮付",
		"category": "菜",
		"recipe": "根菜×1, 出汁×1, 油×1, 豆腐×1, 芋がら縄×1",
		"addVersion": "Nov 8 2021"
	},
	{
		"iconId": "023",
		"name": "兎鍋",
		"category": "菜",
		"recipe": "兎肉×3, <薬味>×1, 清水×3, 出汁×1",
		"season": "冬",
		"lockType": "HotPot"
	},
	{
		"iconId": "023",
		"name": "猪鍋",
		"category": "菜",
		"recipe": "猪肉×3, <薬味>×1, 清水×3, 出汁×1",
		"season": "冬",
		"lockType": "HotPot"
	},
	{
		"iconId": "023",
		"name": "鹿鍋",
		"category": "菜",
		"recipe": "鹿肉×3, <薬味>×1, 清水×3, 出汁×1",
		"season": "冬",
		"lockType": "HotPot"
	},
	{
		"iconId": "023",
		"name": "スッポン鍋",
		"category": "菜",
		"recipe": "スッポン肉×3, <薬味>×1, 清水×2, <酒>×1",
		"season": "冬",
		"lockType": "HotPot"
	},
	{
		"iconId": "023",
		"name": "熊鍋",
		"category": "菜",
		"recipe": "熊肉×3, <薬味>×1, 清水×3, 砂糖×1, 醤油×1",
		"season": "冬",
		"lockType": "HotPot"
	},
	{
		"iconId": "092",
		"name": "**の常夜鍋",
		"category": "菜",
		"foodCandidates": [
			"兎肉",
			"豚肉",
			"猪肉",
			"鹿肉",
			"熊肉",
			"貉肉",
			"スッポン肉",
			"雀肉",
			"雉肉",
			"鴨肉",
			"泥鰌",
			"鮎",
			"鯉",
			"山女",
			"岩魚",
			"鮒",
			"鮭",
			"若鷺",
			"鰊",
			"鰻",
			"蜆"
		],
		"recipe": "**×2, 根菜×1, 昆布×1, 清水×1, <酒>×1"
	},
	{
		"iconId": "093",
		"name": "泥鰌の小鍋立",
		"category": "菜",
		"recipe": "泥鰌×2, 根菜×1, 葱×1, 砂糖×1, 醤油×1, <酒>×1",
		"season": "冬"
	},
	{
		"iconId": "094",
		"name": "鰊の麹漬",
		"category": "菜",
		"recipe": "鰊×1, 根菜×1, 塩×1, 砂糖×1, 麹×1"
	},
	{
		"iconId": "024",
		"name": "ハーリング",
		"category": "菜",
		"recipe": "ハーリング×1",
		"season": "冬",
		"lockType": "Ventania"
	},
	{
		"iconId": "025",
		"name": "ヒュッツポット",
		"category": "菜",
		"recipe": "馬鈴薯×3, 玉葱×1, 根菜×1, 塩×1",
		"season": "冬",
		"lockType": "Ventania"
	},
	{
		"iconId": "026",
		"name": "団子",
		"category": "菓子",
		"recipe": "麦×1, 豆×1"
	},
	{
		"iconId": "027",
		"name": "蓬団子",
		"category": "菓子",
		"recipe": "麦×1, 豆×1, 蓬×1",
		"season": "春"
	},
	{
		"iconId": "028",
		"name": "胡麻団子",
		"category": "菓子",
		"recipe": "麦×1, 豆×1, 胡麻×1",
		"season": "秋"
	},
	{
		"iconId": "029",
		"name": "干柿",
		"category": "菓子",
		"recipe": "干柿×1",
		"season": "冬"
	},
	{
		"iconId": "095",
		"name": "削氷",
		"category": "菓子",
		"recipe": "氷×1",
		"season": "夏"
	},
	{
		"iconId": "030",
		"name": "煎餅",
		"category": "菓子",
		"recipe": "醤油×1, 餅×1, <酒>×1"
	},
	{
		"iconId": "096",
		"name": "蕎麦掻",
		"category": "菓子",
		"recipe": "豆×1, 蕎麦×1"
	},
	{
		"iconId": "031",
		"name": "粢",
		"category": "菓子",
		"recipe": "粢×1",
		"season": "冬"
	},
	{
		"iconId": "026",
		"name": "饅頭",
		"category": "菓子",
		"recipe": "麦×2, 豆×2, 砂糖×1, 油×1",
		"season": "秋"
	},
	{
		"iconId": "032",
		"name": "巻餅",
		"category": "菓子",
		"recipe": "麦×1, 砂糖×1, 胡麻×1"
	},
	{
		"iconId": "033",
		"name": "焼味噌",
		"category": "菓子",
		"recipe": "大蒜×1, 葱×1, 味噌×1"
	},
	{
		"iconId": "034",
		"name": "水",
		"category": "飲物",
		"recipe": ""
	},
	{
		"iconId": "034",
		"name": "清水",
		"category": "飲物",
		"recipe": "清水×1",
		"season": "夏"
	},
	{
		"iconId": "034",
		"name": "名水",
		"category": "飲物",
		"recipe": "名水×1",
		"season": "夏"
	},
	{
		"iconId": "035",
		"name": "茶",
		"category": "飲物",
		"recipe": "茶×1",
		"season": "春"
	},
	{
		"iconId": "035",
		"name": "玄米茶",
		"category": "飲物",
		"recipe": "玄米×1, 茶×1",
		"season": "秋"
	},
	{
		"iconId": "035",
		"name": "毒矯茶",
		"category": "飲物",
		"recipe": "毒矯×2"
	},
	{
		"iconId": "035",
		"name": "昆布茶",
		"category": "飲物",
		"recipe": "昆布×1",
		"season": "冬"
	},
	{
		"iconId": "035",
		"name": "梅昆布茶",
		"category": "飲物",
		"recipe": "梅×1, 昆布×1",
		"season": "春"
	},
	{
		"iconId": "035",
		"name": "福茶",
		"category": "飲物",
		"recipe": "昆布×1, 茶×1, 梅干×1, 名水×1",
		"season": "冬"
	},
	{
		"iconId": "036",
		"name": "口噛酒",
		"category": "飲物",
		"recipe": "口噛酒×1"
	},
	{
		"iconId": "036",
		"name": "濁酒",
		"category": "飲物",
		"recipe": "濁酒×1",
		"season": "冬"
	},
	{
		"iconId": "036",
		"name": "甘酒",
		"category": "飲物",
		"recipe": "甘酒×1",
		"season": "夏"
	},
	{
		"iconId": "097",
		"name": "清酒",
		"category": "飲物",
		"recipe": "清酒×1"
	},
	{
		"iconId": "097",
		"name": "薬酒",
		"category": "飲物",
		"recipe": "薬酒×1",
		"season": "春"
	},
	{
		"iconId": "037",
		"name": "吟醸",
		"category": "飲物",
		"recipe": "吟醸×1"
	},
	{
		"iconId": "038",
		"name": "大吟醸",
		"category": "飲物",
		"recipe": "大吟醸×1"
	},
	{
		"iconId": "097",
		"name": "**焼酎",
		"category": "飲物",
		"foodCandidates": [
			"玄米",
			"分搗米",
			"白米",
			"麦",
			"粟",
			"稗",
			"蕎麦",
			"豆"
		],
		"recipe": "焼酎×1"
	},
	{
		"iconId": "039",
		"name": "ビール",
		"category": "飲物",
		"recipe": "ビール×1",
		"season": "夏",
		"lockType": "Ventania"
	},
	{
		"iconId": "098",
		"name": "**の水",
		"category": "飲物",
		"foodCandidates": [
			"命",
			"技",
			"力",
			"体力",
			"神気",
			"運気",
			"満腹"
		],
		"recipe": "**の粉×2"
	},
	{
		"iconId": "099",
		"name": "**の秘薬",
		"category": "飲物",
		"foodCandidates": [
			"命",
			"力",
			"体力",
			"神気",
			"運気",
			"食力"
		],
		"recipe": "酢×3, **の薄片×1, 秘薬の素×2"
	}
]