
import Lists from './List';
import Paper from './Paper';


// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Lists(theme),
    Paper(theme),
   
  );
}
