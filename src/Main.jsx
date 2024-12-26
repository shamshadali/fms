import MainLeft from './MainLeft';
import MainRight from './MainRight';
import MainCenter from './MainCenter';
import MainCenterBottom from './MainCenterBottom';

export default function Main(){
    return (
        <main>
            <div className="bg-gray-50 py-24">
              <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Everything you need to deploy your app</p>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                  <div className="relative lg:row-span-2">
                    <MainLeft />
                  </div>
                  <div className="relative max-lg:row-start-1">
                    <MainCenter />
                    <MainCenterBottom />
                  </div>
                  <div className="relative lg:row-span-2">
                    <MainRight />
                  </div>
                </div>
              </div>
            </div>
        </main>
    );
};