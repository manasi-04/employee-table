import { USDollar } from "./currency.helpers";
import { getDateInMMDDYYYY } from "./date.helpers";

export const searchResults = (data, search) => {
    return data.filter(val => (
        val.name.toLowerCase().includes(search.toLowerCase()) || val.position.toLowerCase().includes(search.toLowerCase())
        || val.office.toLowerCase().includes(search.toLowerCase()) || (getDateInMMDDYYYY(val.start_date)).includes(search.toLowerCase())
        || USDollar.format(val.salary).toLowerCase().includes(search.toLowerCase()) || val.age.toString().includes(search.toLowerCase())
    ));
};
