export const config = {
    databaseURL: process.env.DATABASE_URL || 'mongodb://localhost:27017/billing',
    port: process.env.PORT || 3000,
    paymentGatewayKey: process.env.PAYMENT_GATEWAY_KEY || 'your-payment-gateway-key',
  };
  