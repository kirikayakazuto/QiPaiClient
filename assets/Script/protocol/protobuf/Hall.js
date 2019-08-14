/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.modelPackage = (function() {

    /**
     * Namespace modelPackage.
     * @exports modelPackage
     * @namespace
     */
    var modelPackage = {};

    modelPackage.EntryGame = (function() {

        /**
         * Properties of an EntryGame.
         * @memberof modelPackage
         * @interface IEntryGame
         * @property {number|null} [gameType] EntryGame gameType
         */

        /**
         * Constructs a new EntryGame.
         * @memberof modelPackage
         * @classdesc Represents an EntryGame.
         * @implements IEntryGame
         * @constructor
         * @param {modelPackage.IEntryGame=} [properties] Properties to set
         */
        function EntryGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntryGame gameType.
         * @member {number} gameType
         * @memberof modelPackage.EntryGame
         * @instance
         */
        EntryGame.prototype.gameType = 0;

        /**
         * Creates a new EntryGame instance using the specified properties.
         * @function create
         * @memberof modelPackage.EntryGame
         * @static
         * @param {modelPackage.IEntryGame=} [properties] Properties to set
         * @returns {modelPackage.EntryGame} EntryGame instance
         */
        EntryGame.create = function create(properties) {
            return new EntryGame(properties);
        };

        /**
         * Encodes the specified EntryGame message. Does not implicitly {@link modelPackage.EntryGame.verify|verify} messages.
         * @function encode
         * @memberof modelPackage.EntryGame
         * @static
         * @param {modelPackage.IEntryGame} message EntryGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntryGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameType != null && message.hasOwnProperty("gameType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameType);
            return writer;
        };

        /**
         * Encodes the specified EntryGame message, length delimited. Does not implicitly {@link modelPackage.EntryGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof modelPackage.EntryGame
         * @static
         * @param {modelPackage.IEntryGame} message EntryGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntryGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntryGame message from the specified reader or buffer.
         * @function decode
         * @memberof modelPackage.EntryGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {modelPackage.EntryGame} EntryGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntryGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.modelPackage.EntryGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EntryGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof modelPackage.EntryGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {modelPackage.EntryGame} EntryGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntryGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntryGame message.
         * @function verify
         * @memberof modelPackage.EntryGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntryGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameType != null && message.hasOwnProperty("gameType"))
                if (!$util.isInteger(message.gameType))
                    return "gameType: integer expected";
            return null;
        };

        /**
         * Creates an EntryGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof modelPackage.EntryGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {modelPackage.EntryGame} EntryGame
         */
        EntryGame.fromObject = function fromObject(object) {
            if (object instanceof $root.modelPackage.EntryGame)
                return object;
            var message = new $root.modelPackage.EntryGame();
            if (object.gameType != null)
                message.gameType = object.gameType | 0;
            return message;
        };

        /**
         * Creates a plain object from an EntryGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof modelPackage.EntryGame
         * @static
         * @param {modelPackage.EntryGame} message EntryGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntryGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.gameType = 0;
            if (message.gameType != null && message.hasOwnProperty("gameType"))
                object.gameType = message.gameType;
            return object;
        };

        /**
         * Converts this EntryGame to JSON.
         * @function toJSON
         * @memberof modelPackage.EntryGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntryGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EntryGame;
    })();

    return modelPackage;
})();

module.exports = $root;
