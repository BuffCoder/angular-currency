# Angular Currency Directive
**Current Version**


v1.0.6

**Description**

This is an angular 1.x directive that utilizes [AutoNumeric](https://github.com/BobKnothe/autoNumeric) to format an input field as currency as a user types.

**Example**

[Plunker](http://plnkr.co/edit/oSMggMRTOUxX2RTOvkgh)

## Usage
* 'bower install angular-currency'
* Include `autoNumeric.js` which should be located at `bower_omponents/autoNumeric/autoNumeric.js'
* Include 'angular-currency' provided by this component into your app
* Add `bckrueger.angular-currency` as a module dependency to your app

**HTML**
```
<input type="text" ng-model="currency" angular-currency="options" variable-options="true" />
```

## Directive Attributes
**angular-currency**: The options to be passed into AutoNumeric

**variable-options**: If you will be using dynamic options this needs to be set to `true`, otherwise the directive will not watch for options updates and update AutoNumeric

## Options
Angular Currency allows for all options supported by [AutoNumeric](https://github.com/BobKnothe/autoNumeric#default-settings--supported-options).

**"aSep"**: controls the thousand separator character

-	aSep: ','	comma (default)
-	aSep: '\''	apostrophe (note: the apostrophe is escaped)
-	aSep: '.'	period
-	aSep: ' '	space
-	aSep: ''	none

**"dGroup"**: controls the digital grouping and the placement of the thousand separator

-	dGroup: '3'	 produces 333,333,333   (default)
-	dGroup: '2'	 produces 22,22,22,333 (India's Lakhs format on values below 1 billion)
-	dGroup: '4'	 produces 4,4444,4444 used in some Asian country's

**"aDec"**: controls the decimal character

-	aDec: '.'	period   (default)
-	aDec: ','	comma

**"altDec"**: this was developed to accommodate for different keyboard layouts. altDec allows you to declare an alternative key to enter the decimal separator assigned in aDec

-	altDec: null   (default)

**"aSign"**: displays the desired currency symbol (examples: &#8364; or EUR). Note: other symbols can be used, such as %, &deg;C, &deg;F, km/h & MPH the possibilities are endless

-	aSign: '' none   (default)
	- example - aSign: 'U$D' 

**"pSign"**: controls the placement of the currency symbol (prefix or suffix)

-	pSign: 'p' prefix to the left   (default)
-	pSign: 's' suffix to the right

**"vMin"**: controls the minimum value allowed

-	vMin: '-9999999999999.99'   (default)
	- example - vMin: '0.00'

**"vMax"**: controls the maximum value allowed

-	vMax: '9999999999999.99'   (default)

*Note - setting the vMin and vMax to both positive or negative with situations that limits the users ability to enter the proper values*  

**"mDec"**: overrides the decimal places that that are set via the vMin/vMax values

- 	mDec: null   (default method) 
	- example - mDec: '4'

**"mRound"**: sets the rounding method used (10 different available)

- 	mRound: 'S'	Round-Half-Up Symmetric   (default)
- 	mRound: 'A'	Round-Half-Up Asymmetric
- 	mRound: 's'	Round-Half-Down Symmetric (lower case s)
- 	mRound: 'a'	Round-Half-Down Asymmetric (lower case a)
- 	mRound: 'B'	Round-Half-Even "Bankers Rounding"
- 	mRound: 'U'	Round Up "Round-Away-From-Zero"
- 	mRound: 'D'	Round Down "Round-Toward-Zero" - same as truncate
- 	mRound: 'C'	Round to Ceiling "Toward Positive Infinity"
- 	mRound: 'F'	Round to Floor "Toward Negative Infinity"
- 	mRound: 'CHF'	Rounding for Swiss currency "to the nearest .00 or .05"

**"aPad"**: controls padding of the decimal places

- 	aPad: true		always pads the decimal with zeros (default)
- 	aPad: false  	no padding

**"nBracket"**: controls if negative values are display with brackets when the input does not have focus

-	nBracket: null	 no brackets use for negative values (default)
-	nBracket: '(,)'
-	nBracket: '[,]'
-	nBracket: '{,}'
-	nBracket: '<,>'

**"wEmpty"**: controls input display behavior

-	wEmpty: 'empty'	allows input to be empty   (default)
-	wEmpty: 'zero'	input field will have at least a zero value
-	wEmpty: 'sign'	the currency symbol is always present###  Methods that are supported:
    

**"lZero"**: controls leading zeros behavior

-	lZero: 'allow'	allows leading zero to be entered. They are removed on focusout event (default)
-	lZero: 'deny'	leading zeros not allowed.
-	lZero: 'keep'	leading zeros allowed and will be retained on the focusout event

**"aForm"**: controls if default values are formatted on page ready (load)

-	aForm: true	default values are formatted on page ready (default)
-	aForm: false	default values are NOT formatted on page ready

**"anDefault"**: helper option for ASP.NET post-back

- 	should be the value of the un-formatted default value
-	this can be set as an option or HTML5 data
-	examples:
-	no default value='' {anDefault: ''}
-	value=1234.56 {anDefault: '1234.56'}


## Additional Info
**Unit Tests**

Unit tests are done with [Karma](http://karma-runner.github.io/0.13/index.html) using [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)

**Code Quality**

Code quality is ensured using [JSHint](http://jshint.com/)