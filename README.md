#  add-to-cart-with-react-hooks
<strong>Click here to preview the app:</strong> https://zakrzewskib.github.io/add-to-cart-with-react-hooks/

- This is a project to practice React and more specifically React Context and useReducer hook. 
- I decided to "clone" chosen parts of allegro website (https://allegro.pl/kategoria/telefony-i-akcesoria).
- Than I added functionaly to add product to the cart <img src="https://assets.allegrostatic.com/metrum/icon/bag-c9f42da6df.svg" height="24px"/>.
- Only hovering works (for example you can't click on icons or use search bar).

### React hooks:
- `useState` - to manage state.
- `useEffect` - to make cart bump animation.
- `useContext` - to have access to cart context and pass offer info from src/components/Offers/Offer to src/components/Cart/Cart.
- `useReducer` - to manage more complicated cart context and its add and remove actions.

<em>Time: 2h</em>

### About CSS:
- It took more time than I assumed and I spend 1/3 of time on onHover 'modal', which caused me some problems.
- To make website responsive I used package react-responsive and useMediaQuery hook.

<em>Time: 6h</em>

### WebScraping:
- I wanted to try out webscraping with BeautifulSoup python library to get offers data from the website.
- Then I put the offers in sqlite database with plans to make an api to get them, but finally I exported database to json file from which I get the data.

<em>Time: 1h</em>

### Screenshots:
- Desktop:
<img src="https://github.com/zakrzewskib/add-to-cart-with-react-hooks/blob/main/screenshots/screenshot-1.png" />
<img src="https://github.com/zakrzewskib/add-to-cart-with-react-hooks/blob/main/screenshots/screenshot-2.png" />
<!-- <img src="https://github.com/zakrzewskib/add-to-cart-with-react-hooks/blob/main/screenshots/screenshot-3.png" /> -->

- Mobile:
<div>
  <img src="https://github.com/zakrzewskib/add-to-cart-with-react-hooks/blob/main/screenshots/mobile-1.png" height="600"/>
  <img src="https://github.com/zakrzewskib/add-to-cart-with-react-hooks/blob/main/screenshots/mobile-2.png"  height="600"/>
</div>
