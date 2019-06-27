import * as $protobuf from "protobufjs";
/** Namespace LoginPackage. */
export namespace LoginPackage {

    /** Properties of a GuestLoginRep. */
    interface IGuestLoginRep {

        /** GuestLoginRep guestKey */
        guestKey: string;
    }

    /** Represents a GuestLoginRep. */
    class GuestLoginRep implements IGuestLoginRep {

        /**
         * Constructs a new GuestLoginRep.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginPackage.IGuestLoginRep);

        /** GuestLoginRep guestKey. */
        public guestKey: string;

        /**
         * Creates a new GuestLoginRep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuestLoginRep instance
         */
        public static create(properties?: LoginPackage.IGuestLoginRep): LoginPackage.GuestLoginRep;

        /**
         * Encodes the specified GuestLoginRep message. Does not implicitly {@link LoginPackage.GuestLoginRep.verify|verify} messages.
         * @param message GuestLoginRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginPackage.IGuestLoginRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuestLoginRep message, length delimited. Does not implicitly {@link LoginPackage.GuestLoginRep.verify|verify} messages.
         * @param message GuestLoginRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginPackage.IGuestLoginRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuestLoginRep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuestLoginRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginPackage.GuestLoginRep;

        /**
         * Decodes a GuestLoginRep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuestLoginRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginPackage.GuestLoginRep;

        /**
         * Verifies a GuestLoginRep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuestLoginRep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuestLoginRep
         */
        public static fromObject(object: { [k: string]: any }): LoginPackage.GuestLoginRep;

        /**
         * Creates a plain object from a GuestLoginRep message. Also converts values to other types if specified.
         * @param message GuestLoginRep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LoginPackage.GuestLoginRep, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuestLoginRep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuestLoginResp. */
    interface IGuestLoginResp {

        /** GuestLoginResp code */
        code: number;
    }

    /** Represents a GuestLoginResp. */
    class GuestLoginResp implements IGuestLoginResp {

        /**
         * Constructs a new GuestLoginResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginPackage.IGuestLoginResp);

        /** GuestLoginResp code. */
        public code: number;

        /**
         * Creates a new GuestLoginResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuestLoginResp instance
         */
        public static create(properties?: LoginPackage.IGuestLoginResp): LoginPackage.GuestLoginResp;

        /**
         * Encodes the specified GuestLoginResp message. Does not implicitly {@link LoginPackage.GuestLoginResp.verify|verify} messages.
         * @param message GuestLoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginPackage.IGuestLoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuestLoginResp message, length delimited. Does not implicitly {@link LoginPackage.GuestLoginResp.verify|verify} messages.
         * @param message GuestLoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginPackage.IGuestLoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuestLoginResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuestLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginPackage.GuestLoginResp;

        /**
         * Decodes a GuestLoginResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuestLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginPackage.GuestLoginResp;

        /**
         * Verifies a GuestLoginResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuestLoginResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuestLoginResp
         */
        public static fromObject(object: { [k: string]: any }): LoginPackage.GuestLoginResp;

        /**
         * Creates a plain object from a GuestLoginResp message. Also converts values to other types if specified.
         * @param message GuestLoginResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LoginPackage.GuestLoginResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuestLoginResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
