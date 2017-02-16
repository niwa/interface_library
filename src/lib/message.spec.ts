/* tslint:disable:no-unused-variable */
import { TestBed} from "@angular/core/testing";
import {} from "jasmine";

import {Message} from "./message";

import {
    MessageDataOKMock
} from "./message-data.mock";

describe("Message class test", () => {
        it("should set the cssClass and icon", () => {
            let message = new Message("ok", "test message");
            expect(message.cssClass).toEqual("ok");


          let message = new Message("message", "info message");
          expect(message.cssClass).toEqual("info");


          let message = new Message("maintenance", "info message");
          expect(message.cssClass).toEqual("warning");


          let message = new Message("error", "info message");
          expect(message.cssClass).toEqual("danger");


          let message = new Message("other", "info message");
          expect(message.cssClass).toEqual("other");
        });
    }
);

