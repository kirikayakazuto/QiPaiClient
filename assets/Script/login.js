/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.LoginPackage = (function() {

    /**
     * Namespace LoginPackage.
     * @exports LoginPackage
     * @namespace
     */
    var LoginPackage = {};

    LoginPackage.GuestLoginRep = (function() {

        /**
         * Properties of a GuestLoginRep.
         * @memberof LoginPackage
         * @interface IGuestLoginRep
         * @property {string} guestKey GuestLoginRep guestKey
         */

        /**
         * Constructs a new GuestLoginRep.
         * @memberof LoginPackage
         * @classdesc Represents a GuestLoginRep.
         * @implements IGuestLoginRep
         * @constructor
         * @param {LoginPackage.IGuestLoginRep=} [properties] Properties to set
         */
        function GuestLoginRep(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuestLoginRep guestKey.
         * @member {string} guestKey
         * @memberof LoginPackage.GuestLoginRep
         * @instance
         */
        GuestLoginRep.prototype.guestKey = "";

        /**
         * Creates a new GuestLoginRep instance using the specified properties.
         * @function create
         * @memberof LoginPackage.GuestLoginRep
         * @static
         * @param {LoginPackage.IGuestLoginRep=} [properties] Properties to set
         * @returns {LoginPackage.GuestLoginRep} GuestLoginRep instance
         */
        GuestLoginRep.create = function create(properties) {
            return new GuestLoginRep(properties);
        };

        /**
         * Encodes the specified GuestLoginRep message. Does not implicitly {@link LoginPackage.GuestLoginRep.verify|verify} messages.
         * @function encode
         * @memberof LoginPackage.GuestLoginRep
         * @static
         * @param {LoginPackage.IGuestLoginRep} message GuestLoginRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuestLoginRep.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.guestKey);
            return writer;
        };

        /**
         * Encodes the specified GuestLoginRep message, length delimited. Does not implicitly {@link LoginPackage.GuestLoginRep.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPackage.GuestLoginRep
         * @static
         * @param {LoginPackage.IGuestLoginRep} message GuestLoginRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuestLoginRep.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuestLoginRep message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPackage.GuestLoginRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPackage.GuestLoginRep} GuestLoginRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuestLoginRep.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPackage.GuestLoginRep();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guestKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("guestKey"))
                throw $util.ProtocolError("missing required 'guestKey'", { instance: message });
            return message;
        };

        /**
         * Decodes a GuestLoginRep message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginPackage.GuestLoginRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPackage.GuestLoginRep} GuestLoginRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuestLoginRep.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuestLoginRep message.
         * @function verify
         * @memberof LoginPackage.GuestLoginRep
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuestLoginRep.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.guestKey))
                return "guestKey: string expected";
            return null;
        };

        /**
         * Creates a GuestLoginRep message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginPackage.GuestLoginRep
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPackage.GuestLoginRep} GuestLoginRep
         */
        GuestLoginRep.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPackage.GuestLoginRep)
                return object;
            var message = new $root.LoginPackage.GuestLoginRep();
            if (object.guestKey != null)
                message.guestKey = String(object.guestKey);
            return message;
        };

        /**
         * Creates a plain object from a GuestLoginRep message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginPackage.GuestLoginRep
         * @static
         * @param {LoginPackage.GuestLoginRep} message GuestLoginRep
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuestLoginRep.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.guestKey = "";
            if (message.guestKey != null && message.hasOwnProperty("guestKey"))
                object.guestKey = message.guestKey;
            return object;
        };

        /**
         * Converts this GuestLoginRep to JSON.
         * @function toJSON
         * @memberof LoginPackage.GuestLoginRep
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuestLoginRep.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GuestLoginRep;
    })();

    LoginPackage.GuestLoginResp = (function() {

        /**
         * Properties of a GuestLoginResp.
         * @memberof LoginPackage
         * @interface IGuestLoginResp
         * @property {number} code GuestLoginResp code
         */

        /**
         * Constructs a new GuestLoginResp.
         * @memberof LoginPackage
         * @classdesc Represents a GuestLoginResp.
         * @implements IGuestLoginResp
         * @constructor
         * @param {LoginPackage.IGuestLoginResp=} [properties] Properties to set
         */
        function GuestLoginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuestLoginResp code.
         * @member {number} code
         * @memberof LoginPackage.GuestLoginResp
         * @instance
         */
        GuestLoginResp.prototype.code = 0;

        /**
         * Creates a new GuestLoginResp instance using the specified properties.
         * @function create
         * @memberof LoginPackage.GuestLoginResp
         * @static
         * @param {LoginPackage.IGuestLoginResp=} [properties] Properties to set
         * @returns {LoginPackage.GuestLoginResp} GuestLoginResp instance
         */
        GuestLoginResp.create = function create(properties) {
            return new GuestLoginResp(properties);
        };

        /**
         * Encodes the specified GuestLoginResp message. Does not implicitly {@link LoginPackage.GuestLoginResp.verify|verify} messages.
         * @function encode
         * @memberof LoginPackage.GuestLoginResp
         * @static
         * @param {LoginPackage.IGuestLoginResp} message GuestLoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuestLoginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified GuestLoginResp message, length delimited. Does not implicitly {@link LoginPackage.GuestLoginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPackage.GuestLoginResp
         * @static
         * @param {LoginPackage.IGuestLoginResp} message GuestLoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuestLoginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuestLoginResp message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPackage.GuestLoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPackage.GuestLoginResp} GuestLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuestLoginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPackage.GuestLoginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a GuestLoginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginPackage.GuestLoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPackage.GuestLoginResp} GuestLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuestLoginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuestLoginResp message.
         * @function verify
         * @memberof LoginPackage.GuestLoginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuestLoginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            return null;
        };

        /**
         * Creates a GuestLoginResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginPackage.GuestLoginResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPackage.GuestLoginResp} GuestLoginResp
         */
        GuestLoginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPackage.GuestLoginResp)
                return object;
            var message = new $root.LoginPackage.GuestLoginResp();
            if (object.code != null)
                message.code = object.code | 0;
            return message;
        };

        /**
         * Creates a plain object from a GuestLoginResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginPackage.GuestLoginResp
         * @static
         * @param {LoginPackage.GuestLoginResp} message GuestLoginResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuestLoginResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.code = 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this GuestLoginResp to JSON.
         * @function toJSON
         * @memberof LoginPackage.GuestLoginResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuestLoginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GuestLoginResp;
    })();

    return LoginPackage;
})();

module.exports = $root;
