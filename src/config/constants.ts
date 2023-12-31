export const LOCATIONS = [
  "잠실",
  "송파",
  "성수",
  "삼성",
  "청담",
  "역삼",
  "대치",
  "개포",
] as const;

export type LOCATION_TYPE = (typeof LOCATIONS)[number];

export const GENDER = ["MALE", "FEMALE"] as const;

export type GenderType = "MALE" | "FEMALE" | null;

export const matchStatusDict = {
  waiting: "WAITING",
  rejected: "REJECTED",
  accepted: "ACCEPTED",
} as const;

export const MATCH_STATUS = Object.values(matchStatusDict);

export type MatchStatus = (typeof MATCH_STATUS)[number];

export const EXERCISE_LIST = [
  {
    id: 0,
    name: "벤치프레스",
    value: "benchPress",
    isChecked: true,
    min: 0,
    max: 300,
  },
  {
    id: 1,
    name: "스쿼트",
    value: "squat",
    isChecked: false,
    min: 0,
    max: 300,
  },
  {
    id: 2,
    name: "데드리프트",
    value: "deadLift",
    isChecked: false,
    min: 0,
    max: 300,
  },
];
export const WEIGHT_MARKS = {
  0: "0kg",
  50: "50kg",
  100: "100kg",
  150: "150kg",
  200: "200kg",
  250: "250kg",
  300: "300kg이상",
};

export const FITNESS_YEARS_MARKS = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5years 이상",
};

export const MAX_WEIGHT = 300;
export const MAX_FITNESS_YEARS = 5;
