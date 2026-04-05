import { useDispatch, useSelector } from "react-redux";

// custom dispatch hook
export const useAppDispatch = () => useDispatch();

// custom selector hook
export const useAppSelector = (selector) => useSelector(selector);
