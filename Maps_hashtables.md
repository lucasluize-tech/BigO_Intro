# Maps and Hashtables

a data structure that has key value pairs.

typical **map** methods :

- set(key,val)
- get(key,val)
- delete(key)
- has(key)
- keys()
- values()
- entries()

Let's code a **Map** :

```JS
class simpleMap{
  constructor(){
    this._items = [];
  }
  set(k,v){
    this._items.push([k, v])
  }
  get(k){
    let kv = this._items.find(kv => k === kv[0]);
    return kv ? kv[1] : undefined;
  }
  has(k){
    return this._items.find(kv => k === kv[0]) !== undefined;
  }
  delete(k){
    let i = this._items.findIndex(kv => k === kv[0]);
    if (i !== -1) this._items.splice(i, 1);
  }
  keys() { return this._items.map(kv => kv[0])};
  values() { return this._items.map(kv => kv[1])};
  entries() { return this._items};
}
```

this would be a valid implementation , but it is not optimal since the only
constant time is the set method, the rest runs at O(n) time.

Let's try a different implementation:

```JS
class betterMap{
  constructor(){
    this._items = [];
  }
  set(k,v){
    const hashedKey = hash(k); // this would give a unique index value.
    this._items[hashedKey] = v;
  }
  get(k){
    const hashedKey = hash(k)
    return this._items[hashedKey]
  }
  has(k){
    const hashedKey = hash(k)
    return this._items[hashedKey] !== undefined;
  }
}
// and etc...
```

In this other case if the hashing is fast, the whole implementation is fast.
in the real world, a good hash is o(1). But if you need security, always opt for crypto
hashes such as SHA or Bcrypt.

### Buckets

IF for some reason hash function returns same index( it does happen and it's called **colision**), we would store more than one key
value pairs in that index , but at a maximum amount to keep efficiency high,
this is called **chaining**.

### Linear Probing

IF collision -> look at the next place available.

### Double Hashing

IF collision -> use another hash function to set a place.

## Sets

`fruits = new Set(['apple', 'berry', 'cherry', 'durian'])`

A Set is just a **Map** without values
Same runtime characteristics

## **Javascript Types**

#### MAP

- Built-in type for mapping
- Keys can be any type
- Retrieval uses === to match
- Keeps keys in order of insertion
- Amortized O(1) for set/get/delete

```JS
let fruits = new Map(
  [["apple", "red"],["berry", "blue"]])

fruits.set("cherry", "red")

// some methods return map, so can chain
fruits.set("cherry", "red")
      .set("durian", "yellow")
      .delete("apple")

let berry_color = fruits.get("berry")
```

#### Object

- Generic object; can use for mapping
- Prior to Map (2015), was only way!
- Keys can only be strings or numbers
- Numbers stringified: 1 → “1”
- Keeps keys in order of insertion
- Amortized O(1) for set/get/delete
- Better to use Map for mapping

```JS
let fruits = {"apple": "red",
              "berry": "blue"}

fruits.cherry = "red"
fruits["durian"] = "yellow"

let berry_color = fruits.berry
let cherry_color = fruits["cherry"]
```

Keys can be a few other less common things, such as Javascript “Symbol” types, though these are uncommon for use in mapping (this is more common when making special methods for OO). The ordering of keys can also at times be a bit complex when you have different types of keys.

#### Set

- Built-in type for sets
- Keys can be any type
- Retrieval uses === to match
- Keeps keys in order of insertion
- Amortized O(1) for set/get/delete

```JS
let fruits = new Set(["apple", "berry"])

fruits.add("cherry")
fruits.has("apple")  // true
```

#### Python Types

#### Dictionary

- Built-in type for mapping
- Keys can be any immutable type
- Keeps keys in order of insertion (Python > 3.6)
- Amortized O(1) for set/get/delete

```PY
fruits = {"apple": "red", "berry": "blue"}

also_can = dict(apple="red", berry="blue")

fruits["cherry"] = "red"

fruits["berry"]      # error if not there
fruits.get("cherry") # or None

# dict comprehension
{x: x * 2 for x in numbers if x > 5}
```

#### Set

- Built-in type for sets
- Keys can be any immutable type
- Key order not guaranteed
- Amortized O(1) for set/get/delete
- Has awesome built-in set operations
- Union, intersection, symmetric difference, subtraction
- For JS, can get these with awesome lodash library

```py
moods = {"happy", "sad", "grumpy"}

dwarfs = set(["happy", "doc", "grumpy"])

# union, intersection, and symmetric diff:
moods | dwarfs  # {happy, sad, grumpy, doc}
moods & dwarfs  # {happy, grumpy}
moods ^ dwarfs  # {sad, doc}

# subtraction
moods - dwarfs  # {sad}
dwarfs - moods  # {doc}

# set comprehension
{n for n in some_list if n > 10}
```

#### Frozenset

- Same as set(), but immutable
- Useful to use as a key in a dict
- Same runtime, same API, same set functions

```py
moods = frozenset(["happy", "sad", "grumpy"])

dwarfs = frozenset(["happy", "doc", "grumpy"])

# union, intersection, and symmetric diff:
moods | dwarfs  # {happy, sad, grumpy, doc}
moods & dwarfs  # {happy, grumpy}
moods ^ dwarfs  # {sad, doc}

# subtraction
moods - dwarfs  # {sad}
dwarfs - moods  # {doc}
```
