This PoC is to consolidate React Native learnings

# Checklist

- [x] Add navigation lib
- [x] Create a route params
- [x] Create a global type to routes
- [x] Nesting navigators
- [x] Force navigation between tabs
- [x] Type nested routes
- [x] Add useEffect fetch
- [x] Add SWR fetch
- [ ] Add React query fetch2
- [ ] Do a benchmark in fetch approaches
- [ ] Add Suspense

# Navigation

- React Navigation
  - Js based
  - light
  - Less performance
- React Native Navigation
  - Native based
  - Faster
  - More performative

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

## Nesting navigation

All componet there are nesting receive their own stack of navigation. If don't find any navigation the component will try the fetch this data from the parent.

In the case where the stack navigation is:

```
RootStack (Stack Navigator)
 ├── Home (Screen)
 ├── Params (Screen)
 ├── Tabs (Tab Navigator)
 │    ├── Screen One (Screen) // go back will redirect to Home (if came from home screen)
 │____├── Screen (Screen) // go back will redirect to Screen One (if came from tab screen one)
```

### Typing nested routes

Declare a global type to nesting route can create a bug because tabs one, two and three only exist inside Tab scree. You need to declare type to nested routes only inside Tab component. Example of wrong approach:

```
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, TabParamList {} // It cause a false type because nested route only exist on Tabs
  }
}
```

---

# Fetch

The performance.now() method returns a high-resolution timestamp representing the time in milliseconds since the page started loading.

##### Fetch during navigation

No native integration. Can use `react-query` or `SRW`

##### performance.now()

The `performance.now()` method returns a **high-resolution timestamp** representing the time in **milliseconds** since the page started loading.

### Why Use `performance.now()` Instead of `Date.now()`?

| Feature              | `performance.now()` | `Date.now()` |
|----------------------|--------------------|--------------|
| Precision           | Microseconds (~1μs) | Milliseconds (1ms) |
| Affected by System Clock | No | Yes (can be changed by system settings) |
| Monotonic (Always Increasing) | Yes | No (can jump backward/forward) |
