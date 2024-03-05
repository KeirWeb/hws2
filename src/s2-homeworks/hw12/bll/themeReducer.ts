const initState = {
  themeId: 1,
};
export type StateType = {
  themeId: number;
};
export const themeReducer = (
  state: StateType = initState,
  action: ActionsType
): StateType => {
  // fix any
  switch (action.type) {
    case "SET_THEME_ID":
      return { ...state, themeId: +action.id };

    default:
      return state;
  }
};
type ActionsType = ReturnType<typeof changeThemeId>;
export const changeThemeId = (id: number) =>
  ({
    type: "SET_THEME_ID",
    id,
  } as const); // fix any
