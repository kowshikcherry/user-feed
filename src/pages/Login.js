import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in successfully!");
      navigate("/"); // Redirect to home page after alert
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };






  const [user] = useAuthState(auth);
  console.log(user)
  // const isLoginOrNot=()=>{
  //   const [user] = useAuthState(auth);
  //   user ? null : <Navigate to="/login" />;
  // }

  // useEffect(() => {
  //   isLoginOrNot();
  // }, []);







  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full overflow-hidden">
        <div className="grid grid-cols-3 grid-rows-4 gap-2 p-4">
          {/* First row */}
          <div className="col-span-1 row-span-1 relative h-32">
            <img
              src="https://s3-alpha-sig.figma.com/img/934c/8eaa/07a6b9eb2a8babdea056a3a7b1fc147f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gG1VNBA2dyrCdAAU8DjK1KO76BHrTDI4NZOSLYdfrVrSjSTXul5Wlvswt~WwrbQb7RaGfhopPbQFPjq6PkcNqEstca8W1qiNYTyNxr0S3wgb1WyHd2sPZy5-LZ1Nwg7dMGQq4Y5ALHIPBOr4uY0mRfHwYLM9fb6T4neAY8d7pbpZB6dKvdq9gafxOsBlE4Lygau11nhdwsQsOju4Qvdg7zkd7FwekwdY8~76IWwYHZ1JVY6trpBtjerrjjiCxWBewqgr4W0qpmeCkWZE5lIBenIq5bDKl1Q23T21FnrxlAkeXkirra6tnUvnVMs-0F10m191ceFy7UDx-xw7Ti0Pgw__"
              alt="Nature scene"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="col-span-2 row-span-1 relative h-32">
            <img
              src="https://s3-alpha-sig.figma.com/img/d73e/2214/4044975f305ca70914a520476023fd6d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SEwhVjfBZ-1AvCgfbnjpA4FbwXwXOjk~0jPQp0Y0pH2~nAHGtDELzHYU3z1VZcf~O1~ePbgOWVVn1Z5uP~o3ueL7NGcF7EoFD3wHuN99iwdzYZ84KlGLNR3Ei8-1lxxua0b6Rv2L8xlhFxNdeP-8UKd~QfQioBzR3tLYJEQQ-hShvOfTG-u2LPXtb1zpLbPyfMEHGE9vZat2~CvSEo3MSeHJ-d2-XYJQL~5NK0U~bj6SnAcesqz9r7ro~zmfbEU85BjcFD-2-rCy8ab5w3Jps0Vz~tJRG1Dq3gTm~wLlSWJZbfSLSlMaecuyct863x8gca2APVLuVanZy2xXNC1rSQ__"
              alt="Scenic view"
              className="rounded-lg object-cover"
            />
          </div>

          {/* Second row */}
          <div className="col-span-1 row-span-1 relative h-32">
            <img
              src="https://s3-alpha-sig.figma.com/img/8dab/37bf/4ad4fac55b77a66d226aa1156db5e423?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5mvyZtzAC58tfDkrwaTTVOhY0zongn25A7fJb~DYoYssHXTe4EqNzOxervU0a1wE6~llbATZfq2rz1hlqmf-xDn2EdQxq3bxFEeaVf~vczEOCVWSija1l3zcknRIhb0H1haCRa4eKngybwFThELfVEzLfRLDs1EytBmLrllrU09ohJ9OHPhYrW7BNjU7q8zTT1PJuZR~sCOOF3BqXZGsLIfb2lQdkATTEUYI0aQeAQO18qdyx3MKsMsRh9Tc9T8A43T4EtUU3iyk2oX9Z37P6xMi5abDdxDMdRvTj60dtXD7Z3TnCW4BRgXMCx1t6jwgFKtHZcfSz9VVQIzvyho~Q__"
              alt="Flowers"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="col-span-1 row-span-2 relative h-64">
            <img
              src="https://s3-alpha-sig.figma.com/img/207b/1314/51e50ce0fbfb20da6e07033f69a9f3ea?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MBaEuWr1wc7I7QYBb36w7-CljWvmSyIxE63M0zIebmGD4pka7x8FOI4iO8BSCDKvE~R2RQfYTd8BpcOnd1cdHkWJlbTdqi4acVF13htIWO9xK4q7GPpNLGo~9gRM4gybKzU3DEHm89VTzCAva7NuA0gdFtIyW0wqFlUjG47jr-l2OpY85ATPjFRkPSE4qzuXQY6XPljzNOVsfo13Fs23oN8a7cHvTWEWayUbaaW91u50AYsbvJJJjAyz4fKI7SVg1VIaU7EH3e3OC01lYRT3VlRNoAlA4osZKAUd-vZkoP9a1DkqrjG3RVR6AHum61VMLlWCpzTlK6fr2gVJLaYA0A__"
              alt="Sky view"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1 relative h-32">
            <img
              src="https://s3-alpha-sig.figma.com/img/6f23/0259/b80d2714580bb71cdcf2cf0a286abaf1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrA9zQ8DkC32eZlNWdvEU34LhAJh20M4DsTueJDEo29JEDSGGUek1sIJRVbl-E-CH7aPKEXO6pzS-XzLb-ujWVQLCubgqqwi~r8vi3JDsrLyKO2d72Mw6feIth0up-Escnp49PmZnlZIaboAt5TDEPjP3dybnsVsZwMkBRsGWqYCA8yxzESrLiqynnlh2Fm6dJ~y3l41yUrc4MpaopTqs5u1OWhot4Z2ucqdxG-nYzeIB0rjX0Uw6sXjbDdI0ydzXW6nuHf3IQ30y1zcecV19Fg5tO3LD8FvgLmGstgMBWuvNzUmPsxaD59QlP~MXtFEOLTIPKVfxR93zPt2WkPBSw__"
              alt="Plants"
              className="rounded-lg object-cover"
            />
          </div>

          {/* Third row */}
          <div className="col-span-1 row-span-1 relative h-32">
            <img
              src="https://s3-alpha-sig.figma.com/img/43a1/be88/fe922fec80f9bd747fbe931d0ac5bcdc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iM~QWiOMPspG9Rjfu5~ZU9YLfhaVLTnkPzXXegulRRvbl5fHoSxKh-P8GhKaZwX5d4FLxJi3PW9kg8gGgHvJjKKQosAkqexR7Apnupodt1VokiUwkFx3U14P7B2H3PVgz2vz6~pc74~EV9tlwGbE8PE2XBmTgJh422X2~UVtIzDyZpxiHLtkzWDV1IzLp~sdgogSs8prho42v3L-LWuxRREFcJF1An~BlrELghX60rrM95veT~QVJwl2uu8gcHolZx7OWlg~GfYRxnGglhK3YoKtCXUiTBRzUkqtIzHgs7B8PPaMnlX4O7VmqJosmIHwmOZxQ2lIC4F7TAx7JLuXLg__"
              alt="Portrait"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1 relative h-32">
            <img
              src="https://s3-alpha-sig.figma.com/img/1d12/d5f5/034e1a60724e3533eb0244bb6ebd4d5c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LfKoZsGM2mpK0VPdEXCEhKFJiqimRMaJlniMpSZ5dez-s2se~gXCm6CsGxzVV7CvN~DbtWn1YyqbU1pbp1yKh3LZrBkwk5WNuwVijFsOztKqO2kUsK8UARr8Ek0eomWRVnTvpPYR4AuKYiRGx~x7E26Dktmo8pKkP6pcuQ7VwEJJ2oHNEyGbVWcZi9ByP-Glxswkmxf8x-tiTpoeX~BNaImdlx8X~YAaVqAlyNyqAd9MCJGNF2JZynaIxMQAXUTi7N54leqEySpYi9GPdeiAACyJvXxVjrCOB5VI4IG1v~eXo-Rry1Gmghxm42oSZPdDnMC-dme4F4EUecFHVWvqag__"
              alt="Nature"
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <img
                src="https://s3-alpha-sig.figma.com/img/e588/3ae0/261c0b95b3d799ea23271ef18084f911?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ro97CzrY1-xXAkdAkDnEOVx0tKagq7W2ADpM15gZ1QOPtDnU29AXGYvfbDDrklbMp8DoeEgQWeqKo3jAw-IpDrI~IZCetw-42e06AiWgM7fFouaaHpyWp4CpqZ4uAtJMmgNP770y652TlCGXZrT0Ld5Gia-ZDSj2QWLgqbj9uHwPEHGK9a1ruXZ6Hz84poJRdYvh3iKmguBDCG3PONGKgdYSrK669uu8pLJqMdVmVtVqv9vnxHxRuSBelqL7m2ghelPKWDFbbdh2vBeQJS7dGwq-GMHCGXUkvEOOGi9XmZr2ZOpFPLHea0DTBbnouhtseaDC-c-6BTGuHuxaUTSHcQ__"
                alt="Vibesnap logo"
                width={50}
                height={50}
              />
              <h1 className="text-2xl font-bold">Vibesnap</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Moments That Matter, Shared Forever.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              variant="outline"
              className="flex items-center justify-center gap-2 bg-black text-white rounded-lg p-5"
              size="lg"
              onClick={handleGoogleLogin}
            >
              <img
                src="https://banner2.cleanpng.com/20201008/rtv/transparent-google-suite-icon-google-icon-1713858301568.webp"
                alt="Google logo"
                width={20}
                height={20}
              />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

/*

the above phote is login page so 
https://s3-alpha-sig.figma.com/img/934c/8eaa/07a6b9eb2a8babdea056a3a7b1fc147f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gG1VNBA2dyrCdAAU8DjK1KO76BHrTDI4NZOSLYdfrVrSjSTXul5Wlvswt~WwrbQb7RaGfhopPbQFPjq6PkcNqEstca8W1qiNYTyNxr0S3wgb1WyHd2sPZy5-LZ1Nwg7dMGQq4Y5ALHIPBOr4uY0mRfHwYLM9fb6T4neAY8d7pbpZB6dKvdq9gafxOsBlE4Lygau11nhdwsQsOju4Qvdg7zkd7FwekwdY8~76IWwYHZ1JVY6trpBtjerrjjiCxWBewqgr4W0qpmeCkWZE5lIBenIq5bDKl1Q23T21FnrxlAkeXkirra6tnUvnVMs-0F10m191ceFy7UDx-xw7Ti0Pgw__
https://s3-alpha-sig.figma.com/img/d73e/2214/4044975f305ca70914a520476023fd6d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SEwhVjfBZ-1AvCgfbnjpA4FbwXwXOjk~0jPQp0Y0pH2~nAHGtDELzHYU3z1VZcf~O1~ePbgOWVVn1Z5uP~o3ueL7NGcF7EoFD3wHuN99iwdzYZ84KlGLNR3Ei8-1lxxua0b6Rv2L8xlhFxNdeP-8UKd~QfQioBzR3tLYJEQQ-hShvOfTG-u2LPXtb1zpLbPyfMEHGE9vZat2~CvSEo3MSeHJ-d2-XYJQL~5NK0U~bj6SnAcesqz9r7ro~zmfbEU85BjcFD-2-rCy8ab5w3Jps0Vz~tJRG1Dq3gTm~wLlSWJZbfSLSlMaecuyct863x8gca2APVLuVanZy2xXNC1rSQ__
https://s3-alpha-sig.figma.com/img/d105/932e/baf6a10056d518f2f660159c27891ae5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j2H6Zby92j5UDS-JjCl1IwpKAtm3IjDKOSO9xPDIjc0GZaZSjG28p~qww-9qCyTvBTRFMlam6-sa69zFsAjLn9ckFk95wAmfqx-YHx4J2D6IE2SGaRWpr5K3wPIDzMyxVdVry2-YrDpR0ABoHBOwlTcCnwmQbnOggXYS3yDH1qp7iKUDmW4wMwBT1zDX1ugWhYkAGTNyVM034UDYsTm1wjudHxku6CrcUOJ~1xO2Azn4vSP1mORiPg~5oSLi3uRP2unAKNbG8wv5fn14Z6TOqMOBV4PTjfIFTo6CbfED5tGGr7BfCed2L6DaWILil4q8Lo8E0~5KCitjK8-ci77KbA__

https://s3-alpha-sig.figma.com/img/8dab/37bf/4ad4fac55b77a66d226aa1156db5e423?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5mvyZtzAC58tfDkrwaTTVOhY0zongn25A7fJb~DYoYssHXTe4EqNzOxervU0a1wE6~llbATZfq2rz1hlqmf-xDn2EdQxq3bxFEeaVf~vczEOCVWSija1l3zcknRIhb0H1haCRa4eKngybwFThELfVEzLfRLDs1EytBmLrllrU09ohJ9OHPhYrW7BNjU7q8zTT1PJuZR~sCOOF3BqXZGsLIfb2lQdkATTEUYI0aQeAQO18qdyx3MKsMsRh9Tc9T8A43T4EtUU3iyk2oX9Z37P6xMi5abDdxDMdRvTj60dtXD7Z3TnCW4BRgXMCx1t6jwgFKtHZcfSz9VVQIzvyho~Q__
https://s3-alpha-sig.figma.com/img/207b/1314/51e50ce0fbfb20da6e07033f69a9f3ea?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MBaEuWr1wc7I7QYBb36w7-CljWvmSyIxE63M0zIebmGD4pka7x8FOI4iO8BSCDKvE~R2RQfYTd8BpcOnd1cdHkWJlbTdqi4acVF13htIWO9xK4q7GPpNLGo~9gRM4gybKzU3DEHm89VTzCAva7NuA0gdFtIyW0wqFlUjG47jr-l2OpY85ATPjFRkPSE4qzuXQY6XPljzNOVsfo13Fs23oN8a7cHvTWEWayUbaaW91u50AYsbvJJJjAyz4fKI7SVg1VIaU7EH3e3OC01lYRT3VlRNoAlA4osZKAUd-vZkoP9a1DkqrjG3RVR6AHum61VMLlWCpzTlK6fr2gVJLaYA0A__
https://s3-alpha-sig.figma.com/img/6f23/0259/b80d2714580bb71cdcf2cf0a286abaf1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrA9zQ8DkC32eZlNWdvEU34LhAJh20M4DsTueJDEo29JEDSGGUek1sIJRVbl-E-CH7aPKEXO6pzS-XzLb-ujWVQLCubgqqwi~r8vi3JDsrLyKO2d72Mw6feIth0up-Escnp49PmZnlZIaboAt5TDEPjP3dybnsVsZwMkBRsGWqYCA8yxzESrLiqynnlh2Fm6dJ~y3l41yUrc4MpaopTqs5u1OWhot4Z2ucqdxG-nYzeIB0rjX0Uw6sXjbDdI0ydzXW6nuHf3IQ30y1zcecV19Fg5tO3LD8FvgLmGstgMBWuvNzUmPsxaD59QlP~MXtFEOLTIPKVfxR93zPt2WkPBSw__

https://s3-alpha-sig.figma.com/img/43a1/be88/fe922fec80f9bd747fbe931d0ac5bcdc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iM~QWiOMPspG9Rjfu5~ZU9YLfhaVLTnkPzXXegulRRvbl5fHoSxKh-P8GhKaZwX5d4FLxJi3PW9kg8gGgHvJjKKQosAkqexR7Apnupodt1VokiUwkFx3U14P7B2H3PVgz2vz6~pc74~EV9tlwGbE8PE2XBmTgJh422X2~UVtIzDyZpxiHLtkzWDV1IzLp~sdgogSs8prho42v3L-LWuxRREFcJF1An~BlrELghX60rrM95veT~QVJwl2uu8gcHolZx7OWlg~GfYRxnGglhK3YoKtCXUiTBRzUkqtIzHgs7B8PPaMnlX4O7VmqJosmIHwmOZxQ2lIC4F7TAx7JLuXLg__
https://s3-alpha-sig.figma.com/img/1d12/d5f5/034e1a60724e3533eb0244bb6ebd4d5c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LfKoZsGM2mpK0VPdEXCEhKFJiqimRMaJlniMpSZ5dez-s2se~gXCm6CsGxzVV7CvN~DbtWn1YyqbU1pbp1yKh3LZrBkwk5WNuwVijFsOztKqO2kUsK8UARr8Ek0eomWRVnTvpPYR4AuKYiRGx~x7E26Dktmo8pKkP6pcuQ7VwEJJ2oHNEyGbVWcZi9ByP-Glxswkmxf8x-tiTpoeX~BNaImdlx8X~YAaVqAlyNyqAd9MCJGNF2JZynaIxMQAXUTi7N54leqEySpYi9GPdeiAACyJvXxVjrCOB5VI4IG1v~eXo-Rry1Gmghxm42oSZPdDnMC-dme4F4EUecFHVWvqag__
https://s3-alpha-sig.figma.com/img/7ce7/facf/669dc0383b4fe8e47fdc768f7968602b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pa7t9hCHQ0J2xdnEJTKRDt-oBRzFK8vQu2BQM0nva9SoarC65rWt~wIEm3g52892U7SKuBmOizz-9kPbW1Gnj5vdmZanyObksEhxeH~5cgVXwPi~jDpNdhE9T79USakGq8s4gMlozyD1fPZaPIBnbL1Pcc-h2sK9TAfZijtOy3-tjQBUpqE8VBp0QH-atti3LaZ5O4~8Gx5ZldeBGaR-O65v5MOHAOeVYN-ugXd2lQOUtiFu8Oooceer7PvB5YnRZ2KgfxFxlAbh2Y5n5W62F8hGwEUsoL7oofShWz9jxfBb8zgodHUgWB1UReDuLNPfBcZEJDPkul9wnGgot1D1kg__


these are the links of that photos and 
https://s3-alpha-sig.figma.com/img/e588/3ae0/261c0b95b3d799ea23271ef18084f911?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ro97CzrY1-xXAkdAkDnEOVx0tKagq7W2ADpM15gZ1QOPtDnU29AXGYvfbDDrklbMp8DoeEgQWeqKo3jAw-IpDrI~IZCetw-42e06AiWgM7fFouaaHpyWp4CpqZ4uAtJMmgNP770y652TlCGXZrT0Ld5Gia-ZDSj2QWLgqbj9uHwPEHGK9a1ruXZ6Hz84poJRdYvh3iKmguBDCG3PONGKgdYSrK669uu8pLJqMdVmVtVqv9vnxHxRuSBelqL7m2ghelPKWDFbbdh2vBeQJS7dGwq-GMHCGXUkvEOOGi9XmZr2ZOpFPLHea0DTBbnouhtseaDC-c-6BTGuHuxaUTSHcQ__
this is the photo for Vibesnap 
so with the help of these links design a ui for mobie view

*/