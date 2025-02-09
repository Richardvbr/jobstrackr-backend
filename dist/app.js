"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const cors_2 = require("@/config/cors");
const supabaseClient_1 = require("@/config/supabaseClient");
const error_middleware_1 = __importDefault(require("@/middlewares/error.middleware"));
dotenv_1.default.config({ path: '.env.local', override: true });
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
app.use((0, cors_1.default)(cors_2.corsOptions));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// Routes
// app.use('/api/v1/cms', cmsRouter);
app.use(error_middleware_1.default);
const sb = supabaseClient_1.supabase;
app.get('/', (req, res) => {
    res.send('JobsTrackr API');
});
app.listen(PORT, () => {
    console.log(`JobsTrackr API is running on http://localhost:${PORT}`);
});
exports.default = app;
