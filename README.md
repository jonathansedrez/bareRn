This PoC is to consolidate React Native learnings

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

TODO: use route params
