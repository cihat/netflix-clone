<script>
import ChildComponent from './ChildComponent.vue'
export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      test: "This is a test text.",
      msg: "Welcome to Your Vue.js App",
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
      styleObject: {
        color: "red",
        fontSize: "18px",
        textAlign: "center",
        marginBottom: "10px",
      },
      message: "Hello Vue.js!",
      rawHtml: "<h1 :style={'color: red'}>This is a h1 element</h1>",
      isButtonDisabled: true,
      seen: true,
      isActive: true,
      styleObject: {
        active: true,
        text_danger: true,
      },
      isRender: true,
      loginType: false,
      items: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      counter: 0,
      name: "Vue.js",
      checked: true,
      checkedNames: [],
      picked: "",
      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      selected1: [],
    };
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    toggleLoginType: function () {
      this.isRender = !this.isRender;
      this.loginType = !this.loginType;
      console.log(this.loginType);
    },
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },
    say: function (message) {
      alert(message);
    },
    warn: function (message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
    nowTime() {
      return new Date().toLocaleTimeString();
    },
    styleObjectWithComputed() {
      return {
        active: this.isActive && !this.error,
        text_danger: this.error && this.error.type === "fatal",
      };
    },
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    },
  },
};
</script>

<template v-if="isRender">
  <hr />
  <br />
  <span :title="this.test"> This is a Test component! </span>
  <hr />
  <br />
  <span
    >Test Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
    doloremque?
  </span>
  <hr />
  <br />
  <div>
    <p>{{ msg }}</p>
    <p :v-model="msg" />
  </div>
  <hr />
  <br />
  <h3>v-for</h3>
  <ol>
    <li v-for="todo in todos" :key="todo">
      <p :style="styleObject">
        {{ todo.text }}
      </p>
    </li>
  </ol>
  <hr />
  <br />
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
  <br />
  <hr />
  <p>v-model</p>
  <p>{{ message }}</p>
  <input v-model="message" type="text" />
  <hr />
  <br />
  <p>Using mustaches: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  <hr />
  <br />
  <button v-bind:disabled="isButtonDisabled">Button</button>
  <hr />
  <br />
  <p v-if="seen">Now you see me</p>
  <hr />
  <br />
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
  <hr />
  <b>
    <p>{{ nowTime }}</p>
  </b>
  <hr />
  <br />
  <p :class="{ active: isActive }">This is a class or style binding teest</p>
  <h1 :class="styleObject">
    This is a class or style binding test with Object
  </h1>
  <hr />
  <br />
  <div class="is_render" v-if="isRender">
    <h1>Hellooo</h1>
    <p>😘</p>
  </div>
  <div v-else>
    <h1>This is wrote with a v-if conditions div. This is else</h1>
    <p>😘</p>
  </div>
  <hr />
  <br />
  <div v-if="loginType">
    <label>Username</label>
    <input placeholder="Enter your username" key="username-input" />
  </div>
  <div v-else>
    <label>Email</label>
    <input placeholder="Enter your email address" key="email-input" />
  </div>
  <button @click="toggleLoginType">Toggle Login type</button>
  <hr />
  <br />
  <ul id="example-1">
    <li v-for="(item, index) in items" :key="item.message">
      {{ item.message }} -- {{ index }}
    </li>
  </ul>
  <hr />
  <br />
  <p>v-for with an Object</p>
  <ul id="v-for-object" class="demo">
    <li v-for="(value, index) in object" :key="index">
      {{ value }}
    </li>
  </ul>
  <hr />
  <br />

  <div v-for="(value, key, index) in object" :key="index">
    {{ key }}: {{ value }} -- {{ index }}
  </div>
  <hr />
  <br />
  <ul>
    <li v-for="n in evenNumbers" :key="n.id">{{ n }}</li>
  </ul>
  <hr />
  <br />
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
  <hr />
  <br />
  <button @click="greet">Greet</button>
  <hr />
  <br />
  <button v-on:click="say('aslfşksajdf')">Say Cihat</button>
  <button v-on:click="say('Mustafa')">Say Mustafa</button>
  <hr />
  <br />
  <button v-on:click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>
  <hr />
  <br />
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
  <p>{{ checked }}</p>
  <hr />
  <br />
  <div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="Cihat" v-model="checkedNames" />
    <label for="cihat">Cihat</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>
  </div>
  <hr />
  <br />
  <div>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <span>Picked: {{ picked }}</span>
  </div>
  <br />
  <hr />
  <div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
  <hr />
  <br />
  <div>
    <select v-model="selected1" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br />
    <span>Selected: {{ selected1 }}</span>
  </div>
  <hr />
  <br />
  <select v-model="selected">
    <option
      v-for="option in options"
      v-bind:value="option.value"
      :key="option.id"
    >
      {{ option.text }}
    </option>
  </select>
  <span>Selected: {{ selected }}</span>
  <hr />
  <br />
  <div>
    <!-- `picked` is a string "a" when checked -->
    <input type="radio" v-model="picked" value="a" />

    <!-- `toggle` is either true or false -->
    <input type="checkbox" v-model="toggle" />

    <!-- `selected` is a string "abc" when the first option is selected -->
    <select v-model="selected">
      <option value="abc">ABC</option>
    </select>
  </div>
  <hr>
  <br>
  <div>
    <ChildComponent />
  </div>
</template>

<style lang="scss" scoped>
.active {
  background-color: black;
  color: white;
}

.text_danger {
  color: rebeccapurple;
  background-color: pink;
}
</style>