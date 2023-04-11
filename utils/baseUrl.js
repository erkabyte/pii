const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://pii-7ya2.vercel.app"
		: "http://localhost:3000";

export default baseUrl;
