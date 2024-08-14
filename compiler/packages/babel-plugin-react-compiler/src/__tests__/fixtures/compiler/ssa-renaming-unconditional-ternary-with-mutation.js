import {arrayPush} from 'shared-runtime';
function foo(props) {
  let x = [];
  x.push(props.bar);
  props.cond
    ? ((x = {}), (x = []), x.push(props.foo))
    : ((x = []), (x = []), x.push(props.bar));
  arrayPush(x, 4);
  return x;
}

export const FIXTURE_ENTRYPOINT = {
  fn: foo,
  params: [{cond: false, foo: 2, bar: 55}],
  sequentialRenders: [
    {cond: false, foo: 2, bar: 55},
    {cond: false, foo: 3, bar: 55},
    {cond: true, foo: 3, bar: 55},
  ],
};
