# Environment Configuration

## API URL Configuration

This React application uses environment variables to configure the API base URL, making it flexible across different environments.

### Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your API URL:
   ```env
   REACT_APP_API_URL=http://localhost:8000
   ```

### Environment Variables

- `REACT_APP_API_URL`: Base URL for the backend API endpoints

### Examples

- **Local development**: `http://localhost:8000`
- **Development server**: `https://dev-api.example.com`
- **Production**: `https://api.example.com`

### Usage in Components

The environment variable is used in fetch calls like this:

```javascript
fetch(`${process.env.REACT_APP_API_URL}/api/workouts`)
```

This approach ensures that the application can be deployed to different environments without code changes.