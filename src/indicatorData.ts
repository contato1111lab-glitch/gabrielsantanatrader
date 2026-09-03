export const BROKER10_REGISTER_URL = "https://broker10.com/trader/register/trade-now";
export const INDICATOR_NAME = "Hexor GPT";
export const YOUTUBE_TUTORIAL_URL = "https://www.youtube.com/embed/txgAOzfiSWg?si=m_f__jIOUBnxZMT3"; // embed URL for iframe
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@gabrielsantanaaabr";

export const INDICATOR_CODE = `instrument {
    name = "Hexor GPT",
    short_name = "Hexor GPT",
    overlay = true
}

-- =========================
-- CONFIGURACOES
-- =========================

fast_period = input(5, "Media Rapida", input.integer, 1)
slow_period = input(14, "Media Lenta", input.integer, 1)
trend_period = input(50, "Tendencia", input.integer, 1)
rsi_period = input(14, "RSI", input.integer, 1)

-- =========================
-- MEDIAS
-- =========================

ema_fast = ema(close, fast_period)
ema_slow = ema(close, slow_period)
ema_trend = ema(close, trend_period)

-- =========================
-- RSI
-- =========================

rsi_value = rsi(close, rsi_period)

-- =========================
-- TENDENCIA
-- =========================

trend_up = close > ema_trend
trend_down = close < ema_trend

-- =========================
-- MOMENTUM
-- =========================

momentum_up = close > close[1]
momentum_down = close < close[1]

-- =========================
-- CRUZAMENTO
-- =========================

cross_up =
    ema_fast > ema_slow and
    ema_fast[1] <= ema_slow[1]

cross_down =
    ema_fast < ema_slow and
    ema_fast[1] >= ema_slow[1]

-- =========================
-- ROMPIMENTO
-- =========================

break_up = close > high[1]
break_down = close < low[1]

-- =========================
-- CONFLUENCIA
-- =========================

buy_score = 0

buy_score = buy_score +
    (trend_up and 1 or 0)

buy_score = buy_score +
    (ema_fast > ema_slow and 1 or 0)

buy_score = buy_score +
    (rsi_value > 50 and rsi_value < 70 and 1 or 0)

buy_score = buy_score +
    (momentum_up and 1 or 0)

buy_score = buy_score +
    (break_up and 1 or 0)

sell_score = 0

sell_score = sell_score +
    (trend_down and 1 or 0)

sell_score = sell_score +
    (ema_fast < ema_slow and 1 or 0)

sell_score = sell_score +
    (rsi_value < 50 and rsi_value > 30 and 1 or 0)

sell_score = sell_score +
    (momentum_down and 1 or 0)

sell_score = sell_score +
    (break_down and 1 or 0)

-- =========================
-- SINAIS
-- =========================

buy_signal =
    buy_score >= 4

sell_signal =
    sell_score >= 4

-- =========================
-- PLOT
-- =========================

plot_shape(
    buy_signal,
    "BUY",
    shape_style.circle,
    shape_size.normal,
    "#00FF00",
    shape_location.belowbar,
    0,
    "COMPRA",
    "#00FF00"
)

plot_shape(
    sell_signal,
    "SELL",
    shape_style.circle,
    shape_size.normal,
    "#FF0000",
    shape_location.abovebar,
    0,
    "VENDA",
    "#FF0000"
)
`;
