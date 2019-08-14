import * as $protobuf from "protobufjs";
/** Namespace modelPackage. */
export namespace modelPackage {

    /** Properties of an EntryGame. */
    interface IEntryGame {

        /** EntryGame gameType */
        gameType?: (number|null);
    }

    /** Represents an EntryGame. */
    class EntryGame implements IEntryGame {

        /**
         * Constructs a new EntryGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: modelPackage.IEntryGame);

        /** EntryGame gameType. */
        public gameType: number;

        /**
         * Creates a new EntryGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntryGame instance
         */
        public static create(properties?: modelPackage.IEntryGame): modelPackage.EntryGame;

        /**
         * Encodes the specified EntryGame message. Does not implicitly {@link modelPackage.EntryGame.verify|verify} messages.
         * @param message EntryGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: modelPackage.IEntryGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntryGame message, length delimited. Does not implicitly {@link modelPackage.EntryGame.verify|verify} messages.
         * @param message EntryGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: modelPackage.IEntryGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntryGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntryGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): modelPackage.EntryGame;

        /**
         * Decodes an EntryGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntryGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): modelPackage.EntryGame;

        /**
         * Verifies an EntryGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntryGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntryGame
         */
        public static fromObject(object: { [k: string]: any }): modelPackage.EntryGame;

        /**
         * Creates a plain object from an EntryGame message. Also converts values to other types if specified.
         * @param message EntryGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: modelPackage.EntryGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntryGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
