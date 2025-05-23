// Create a Redis client
import { createClient } from 'redis';
import config from '../config/redis';

let redis = createClient(config);

redis.on('error', (err) => {
  console.error('Redis error:', err);
});

// Connect the client
redis.connect().then(() => {
  // Example usage
  console.log('Connect redis client');
}).catch((err) => {
  console.error('Error connecting to Redis:', err);
});

export default redis;