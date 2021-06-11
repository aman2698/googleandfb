let initialState = {
  authentication: false,
  loading: true,
  email: "",
  name: "",
  imageURL: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GOOGLE_LOGIN":
      return {
        ...state,
        authentication: true,
        loading: false,
        name: payload.name,
        email: payload.email,
        imageURL: payload.imageUrl,
      };

    case "FACEBOOK_LOGIN":
      return {
        ...state,
        authentication: true,
        loading: false,
        name: payload.name,
        email: "",
        imageURL: payload.picture.data.url,
      };

    case "LOGOUT":
      return {
        ...state,
        authentication: false,
        loading: false,
        name: "",
        email: "",
        imageURL: "",
      };
    default:
      return state;
  }
}
