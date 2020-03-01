# Queryable selector:
> Queryable selectors mean we can use document.querySelector to get those elements satisfying the query.
- .class
- #id
- \* (select all elements)
- element
- [selectorA]>[selectorB]
- [selectorA]+[selectorB]
- [selectorA]~[selectorB]
- [attribute] series
- :lang(...)
- :checked, :default, :enabled, :disabled, :empty, :optional, :link
- :first-child, :first-of-type, :last-child, :last-of-type
- :not(selector)
- :nth-child(n), :nth-child(even), :nth-child(odd)
- :nth-last-child(n), :nth-last-child(even), :nth-last-child(odd)
- :nth-of-type(n), :nth-of-type(even), :nth-of-type(odd)
- :nth-last-of-type(n), :nth-last-of-type(even), :nth-last-of-type(odd)


# Non-queryable selector:
> Non-queryable selectors mean we `cannot` use document.querySelector to get those elements satisfying the query.
- :active
- :visited
- :focus
- :hover
- ::before, ::after
- ::placeholder
- ::selection