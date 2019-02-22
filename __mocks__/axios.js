const axiosMock = jest.genMockFromModule("axios");

let mockResponse = {
  data: { shops: [{ location: "test location", address: "test address" }] }
};

axiosMock.get.mockImplementation(() => {
  return new Promise(resolve => {
    axiosMock.delayTimer = setTimeout(() => {
      resolve(mockResponse);
    }, 100);
  });
});

export default axiosMock;
