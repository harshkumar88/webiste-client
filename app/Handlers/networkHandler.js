const get_data = async (url) => {
  try {
    const res = await fetch(url, {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    return data;
  } catch (error) {
    console.log("error");
    throw error;
  }
};

const post_data = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    return data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export { get_data, post_data };
