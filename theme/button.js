import { COLORS } from "./colors.js";

const genericBlackButton = {
  base: {
    borderRadius: 100,
    padding: 11,
    borderWidth: 1,
    borderColor: COLORS.dark_grey,
    backgroundColor: COLORS.medium_grey,
  },
};

const genericTransparentButton = {
  base: {
    alignItems: "center",
    backgroundColor: "#4e4d4c1e",
    borderRadius: 5,
    marginHorizontal: 10,
    padding: 15,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  },
};

const transparentInput = {
  inputWrapper: {
    flex: 1,
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
  },
  base: {
    height: 36,
    padding: 10,
    margin: 18,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
  },
};
