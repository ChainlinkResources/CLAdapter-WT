const assert = require('chai').assert
const createRequest = require('../index.js').createRequest

describe('createRequest', () => {
  // Test Job ID  data is just for filler
  const jobID = '278c97ffadb54a5bbb93cfec5f7b5503'

  context('when specifying a stock symbol', () => {
    // Update the parameters in the data to match actual requests for the target API
    const req = {
      id: jobID,
      data: {
        endpoint: '/stock',
        symbol: 'IBM',
        api_token: 'process.env.API_KEY'
      }
    }

    it('returns data to the node', (done) => {
      createRequest(req, (statusCode, data) => {
        assert.equal(statusCode, 200)
        assert.equal(data.jobRunID, jobID)
        assert.isNotEmpty(data.data)
        done()
      })
    })
  })

  context('when returning AMZN symbol', () => {
    // Update the parameters in the data to match actual requests for the target API
    const req = {
      id: jobID,
      data: {
          endpoint: 'stock',
          symbol: 'AMZN',
          api_token: 'process.env.API_KEY'
      }
    }

    it('returns data to the node', (done) => {
      createRequest(req, (statusCode, data) => {
        assert.equal(statusCode, 200)
        assert.equal(data.jobRunID, jobID)
        assert.isNotEmpty(data.data)
        done()
      })
    })
  })
})
