import profileReducer, { addPostActionCreator } from "./ProfileReducer";
import React from "react";



let initialState = {
  _postItemData: [
  ],}
it('new post should be added', () => {
  let action = addPostActionCreator("asdasdasd")
  let newState = profileReducer({state},{action})
});
expect(newState.posts.length).toBe(5)