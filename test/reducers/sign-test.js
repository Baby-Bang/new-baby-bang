"use strict";
const reducer = require('../../public/js/reducers/sign');
const actions = require('../../public/js/actions/sign');
const expect = require('chai').expect;

describe('sign reducer', function () {
    it('changes sign', function () {
        const state = {isUserExist: false, isSamePassword: true, isDisabled: ''};
        expect(reducer(state, actions.userExist(true))).to.be.deep.equal({
            isUserExist: true,
            isSamePassword: true,
            isDisabled: ''
        });
        expect(reducer(state, actions.samePassword(false))).to.be.deep.equal({
            isUserExist: false,
            isSamePassword: false,
            isDisabled: ''
        });
        expect(reducer(state, actions.disable('disabled'))).to.be.deep.equal({
            isUserExist: false,
            isSamePassword: true,
            isDisabled: 'disabled'
        });
    });
});