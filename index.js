/**
 * Demonstrates a performance issue in Prettier when
 * the input string contains 25 nested function calls
 * (JavaScript).
 */
const prettier = require('prettier');
const input = `_c("div", [
  _c("div", [
    _c("div", [
      _c("div", [
        _c("div", [
          _c("div", [
            _c("div", [
              _c("div", [
                _c("div", [
                  _c("div", [
                    _c("div", [
                      _c("div", [
                        _c("div", [
                          _c("div", [
                            _c("div", [
                              _c("div", [
                                _c("div", [
                                  _c("div", [
                                    _c("div", [
                                      _c("div", [
                                        _c("div", [
                                          _c("div", [
                                            _c("div", [_c("div", [_c("div")])])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
])`;
const output = prettier.format(input, { parser: 'babylon' });
console.log(output);
