const SHOP_BASE_URL = "https://thespeedfoundry-cuvfktu9.myshopify.com";
const SHOP_QUERY = "?_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaXQwYUdWemNHVmxaR1p2ZFc1a2Nua3RZM1YyWm10MGRUa3ViWGx6YUc5d2FXWjVMbU52YlFZNkJrVlUiLCJleHAiOiIyMDI2LTA4LTI3VDAyOjM0OjA4LjUwNloiLCJwdXIiOiJwZXJtYW5lbnRfcGFzc3dvcmRfeWJ5cGFzcyJ9fX19--a9f9cf6441d8c48a48a24871686241771eec854c&_cd=8800ed06eb2b427f61d5d6b55e9e62daa5220cfb595878200bd9e2410db15fe2&_uid=141529743526&preview_theme_id=197153718438&preview_token=cpi9k6pokejci100lubuasqyxkhyhqd3";

export const SHOP_URL = `${SHOP_BASE_URL}/${SHOP_QUERY}`;

export const shopPath = (path) => `${SHOP_BASE_URL}${path}${SHOP_QUERY}`;