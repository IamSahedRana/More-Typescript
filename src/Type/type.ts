type Status = "pending" | "success" | "failed";

type Creator = {
    name: string;
    followers: number;
    platform?: string;
    current?: Status;
};

const creator1: Creator = {
    name: "rana",
    followers: 13849,
    platform: "Youtube",
    current: "pending"
};

const creator2: Creator = {
    name: "rana",
    followers: 13849,
    platform: "Youtube"
};

const creator3: Creator = {
    name: "rana",
    followers: 13849
};

console.log(creator1);
console.log(creator2);
console.log(creator3);