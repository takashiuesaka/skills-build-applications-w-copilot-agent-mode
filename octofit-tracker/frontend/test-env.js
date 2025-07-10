// Test utility to verify environment variable configuration
// This can be run in the browser console or as a Node.js script

console.log('Testing Environment Variable Configuration');
console.log('==========================================');

// Check if REACT_APP_API_URL is defined
const apiUrl = process.env.REACT_APP_API_URL;

if (apiUrl) {
  console.log('✅ REACT_APP_API_URL is defined:', apiUrl);
  
  // Test URL construction
  const endpoints = [
    '/api/workouts',
    '/api/activities/',
    '/api/leaderboard',
    '/api/teams',
    '/api/users'
  ];
  
  console.log('\n📝 Generated API endpoints:');
  endpoints.forEach(endpoint => {
    const fullUrl = `${apiUrl}${endpoint}`;
    console.log(`  - ${fullUrl}`);
  });
  
} else {
  console.log('❌ REACT_APP_API_URL is not defined');
  console.log('   Please check your .env file configuration');
}

console.log('\n💡 To set up environment variables:');
console.log('   1. Copy .env.example to .env');
console.log('   2. Update REACT_APP_API_URL in .env file');
console.log('   3. Restart the React development server');