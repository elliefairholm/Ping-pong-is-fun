/* eslint-disable no-undef */
require('chai').should();

const service = require('../index');

describe('Service', () => {
  it('should return a string', () => {
    service('0:0').should.be.a('string');
  });
  it('should change the serves every 5 points until the score is 20:20', () => {
    service('0:0').should.eql('first');
    service('1:3').should.eql('first');
    service('2:3').should.eql('second');
    service('5:4').should.eql('second');
    service('5:5').should.eql('first');
    service('11:11').should.eql('first');
    service('14:15').should.eql('second');
  });
  it('should change the serves every 2 points after 20:20', () => {
    service('20:20').should.eql('first');
    service('22:21').should.eql('second');
    service('22:22').should.eql('first');
    service('22:23').should.eql('first');
  });
  it('should return finished if the game is done', () => {
    service('21:0').should.eql('finished');
    service('19:21').should.eql('finished');
    service('22:20').should.eql('finished');
    service('26:24').should.eql('finished');
  });
});