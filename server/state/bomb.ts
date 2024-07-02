import defusePost from "../api/bom/defuse.post";

export let isTicking = true;

export function defuse() {
  isTicking = false;
}
