// https://raw.githubusercontent.com/NicolasDeveloper/guid-typescript/master/lib/guid.ts

export default class GuidHelper {

    public static validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
    public static EMPTY = "00000000-0000-0000-0000-000000000000";
    private value: string;

    private constructor(guid: string) {
        if (!guid) { throw new TypeError("Invalid argument; `value` has no value."); }

        this.value = GuidHelper.EMPTY;

        if (guid && GuidHelper.isGuid(guid)) {
            this.value = guid;
        }
    }

    public static isGuid(guid: any) {
        const value: string = guid.toString();

        return guid && (guid instanceof GuidHelper || GuidHelper.validator.test(value));
    }

    public static create(): GuidHelper {
        return new GuidHelper([GuidHelper.gen(2), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(3)].join("-"));
    }

    public static createEmpty(): GuidHelper {
        return new GuidHelper("emptyGuid");
    }

    public static parse(guid: string): GuidHelper {
        return new GuidHelper(guid);
    }

    public static raw(): string {
        return [GuidHelper.gen(2), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(3)].join("-");
    }

    private static gen(count: number) {
        let out: string = "";

        for (let i: number = 0; i < count; i++) {
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }

        return out;
    }

    public equals(other: GuidHelper): boolean {
        return GuidHelper.isGuid(other) && this.value === other.toString();
    }

    public isEmpty(): boolean {
        return this.value === GuidHelper.EMPTY;
    }

    public toString(): string {
        return this.value;
    }

    public toJSON(): any {
        return {
            value: this.value,
        };
    }

}

