# ////FourSwords WorldTraderData Chainlink External Adapter
https://www.worldtradingdata.com/documentation



It was built using the Chainlink NodeJS Template available at https://github.com/thodges-gh/CL-EA-NodeJS-Template.

## Setup

### Install and Zip
```bash
npm install
```

```bash
zip -r FSmarket.zip
```


### Docker
```bash
docker build . -t FSmarket
docker run --name FSmarket -p 8080:8080 -e API_KEY=<YOUR_API_KEY> FSmarket
```

This will run the adapter at http://localhost:8080.

### Install to AWS Lambda

- In Lambda Functions, create function
- On the Create function page:
  - Give the function a name
  - Use Node.js 8.10 for the runtime
  - Choose an existing role or create a new one
  - Click Create Function
- Under Function code, select "Upload a .zip file" from the Code entry type drop-down
- Click Upload and select the `open-weather-ea.zip` file
- Handler should remain index.handler
- Add the environment variable (repeat for all environment variables):
  - Key: API_KEY
  - Value: Your_API_key
- Save


###  Install to GCP

- In Functions, create a new function, choose to ZIP upload
- Click Browse and select the `open-weather-ea.zip` file
- Select a Storage Bucket to keep the zip in
- Function to execute: gcpservice
- Click More, Add variable (repeat for all environment variables)
  - NAME: API_KEY
  - VALUE: Your_API_key

## Parameters
The following API endpoints are supported with the related parameters

endpoint: stock

symbol: enter any stock market unique symbol to retrieve data.

## Testing
```bash
API_KEY=<YOUR_API_KEY> npm test
```
