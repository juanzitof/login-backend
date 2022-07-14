export const config = {
	mongodb: {
		url: process.env.mongoURI,
	},
	cors: process.env.CORS || "*",
	
	PORT: process.env.PORT || 8080,
};
