const baseUrl =
	process.env.NODE_ENV === "production"
		? "http://pii-7ya2-py4rogsth-eggy011235.vercel.app"
		: "http://localhost:3000";

export default baseUrl;
