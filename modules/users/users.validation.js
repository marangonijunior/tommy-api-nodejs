const { body } = require('express-validator/check')

export function validate() {
  return [
    body('name', 'Name doesnt exists')
      .exists()
      .isLength({ min: 3 }),
    body('email', 'Invalid email :(')
      .isEmail(),
    body('gender', 'Gender not found :(')
      .exists(),
    body('phone', 'Phone not found :(')
      .exists(),
    body('address', 'Address not found :(')
      .exists(),
    body('address.*.number')
      .exists()
      .isNumeric(),
    body('address.*.street')
      .exists(),
    body('address.*.city')
      .exists(),
    body('address.*.zipcode')
      .exists()
  ]
}