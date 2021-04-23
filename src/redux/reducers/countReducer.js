// reducer nhận vào 2 tham số  thứ 2
// tham số thứ nhất là state của nó
// tham số thứ 2 là action để thay đổi state của nó
// action là 1 obj, và có 1 property bắt buộc là type
// type là hành động để reducer bk được cân f phải thay đổi state ntn
// Ex: action = {type: "TANG_BIEN_DEM"}

function countReducer(state = 0, action) {
  console.log(action);
  switch (action.type) {
    case "TANG_BIEN_DEM":
      return state + 1;
    case "GIAM_BIEN_DEM":
      return state - 1;
    default:
      return false;
  }
}

export default countReducer;
