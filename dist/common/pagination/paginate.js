"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
const constants_1 = require("../constants");
function paginate(totalItems, current_page = 1, pageSize = 10, count = 0, url = '') {
    const totalPages = Math.ceil(totalItems / pageSize);
    if (current_page < 1) {
        current_page = 1;
    }
    else if (current_page > totalPages) {
        current_page = totalPages;
    }
    const startIndex = (current_page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    return {
        total: totalItems,
        current_page: +current_page,
        count,
        last_page: totalPages,
        firstItem: startIndex,
        lastItem: endIndex,
        per_page: pageSize,
        first_page_url: `${constants_1.APP_URL}${url}&page=1`,
        last_page_url: `${constants_1.APP_URL}${url}&page=${totalPages}`,
        next_page_url: totalPages > current_page
            ? `${constants_1.APP_URL}${url}&page=${Number(current_page) + 1}`
            : null,
        prev_page_url: totalPages > current_page
            ? `${constants_1.APP_URL}${url}&page=${current_page}`
            : null,
    };
}
exports.paginate = paginate;
//# sourceMappingURL=paginate.js.map