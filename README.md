This PoC is to consolidate React Native learnings

# Checklist
- [x] Add navigation lib
- [x] Create a route params
- [x] Create a global type to routes
- [ ] Nesting navigators
- [ ] Wizard routes
- [ ] Try fetch approaches

# Navigation and fetch

- React Navigation
  - Js based
  - light
  - Less performance
- React Native Navigation
  - Native based
  - Faster
  - More performative

##### Fetch during navigation

No native integration. Can use `react-query` or `SRW`

## Dynamic navigation

[Ref](The dynamic configuration allows for more flexibility but requires more boilerplate and configuration (e.g. for deep links, typescript etc.).)

> The dynamic configuration allows for more flexibility but requires more boilerplate and configuration (e.g. for deep links, typescript etc.).

In **React Navigation**, dynamic configuration means changing screen options **at runtime** instead of defining them statically. This is useful for:

✅ **Theming** – Changing colors dynamically.  
✅ **Localization** – Updating titles based on language.  
✅ **Conditional UI** – Showing/hiding buttons dynamically.

| **Feature**                            | **Method**                                                               |
| -------------------------------------- | ------------------------------------------------------------------------ |
| **Change title dynamically**           | `navigation.setOptions({ title: "New Title" })`                          |
| **Change header style dynamically**    | `navigation.setOptions({ headerStyle: { backgroundColor: "#4A90E2" } })` |
| **Add header buttons dynamically**     | `navigation.setOptions({ headerRight: () => <Button /> })`               |
| **Change title based on route params** | `navigation.setOptions({ title: route.params?.title })`                  |
| **Apply theme-based styling**          | Use `screenOptions` inside `Stack.Navigator`                             |

- Use **static configuration** whenever possible for **better performance** and **simpler code**.
- Use **dynamic configuration** **only when necessary**, such as for **user preferences**, **data-driven UIs**, or **route-based updates**.

Handling types with Navigation component create a lots of side components. Maybe storage then in a specific folder to routes can provide a single source of truth and share types.

## Params

Is indicate to read params based on props instead of useRoute custom hook because it is not type safe; When using TS.

## Typescript

Defining an global type you can infer a route params.

React Navigation provides a default global type for route parameters, called `ReactNavigation.RootParamList`. If you don't explicitly define it, TypeScript assumes an empty object `{}`, which leads to errors like `"Argument of type 'string' is not assignable to parameter of type 'never'"` when calling `navigation.navigate('SomeScreen')`.

It makes TypeScript more flexible and reduces the need for repetitive typing across your codebase.

```
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
}
```
