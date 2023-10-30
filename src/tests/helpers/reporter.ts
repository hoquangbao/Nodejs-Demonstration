import { DisplayProcessor, SpecReporter, StacktraceOption } from 'jasmine-spec-reporter'
import CustomReporter = jasmine.CustomReporter;
import SuiteInfo = jasmine.JasmineStartedInfo;

jasmine.getEnv().addReporter((new SpecReporter() as unknown) as CustomReporter);