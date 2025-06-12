import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDebouncedCallback } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const inputId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const debounced = useDebouncedCallback(
    (value) => dispatch(changeFilter(value)),
    500
  );

  return (
    <div className={css.container}>
      <label id={inputId}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        defaultValue={filter}
        onChange={(e) => debounced(e.target.value)}
        name="search"
        id={inputId}
      />
    </div>
  );
}
