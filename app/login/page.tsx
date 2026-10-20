import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, {
      ko: "로그인 | GCM 아카데미",
      en: "Log in | GCM Academy",
      zh: "登录 | GCM 学院",
      ja: "ログイン | GCM アカデミー",
      it: "Accedi | Accademia GCM",
      fr: "Connexion | Académie GCM",
      es: "Iniciar sesión | Academia GCM",
    }),
  };
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; dup?: string; reset?: string }>;
}) {
  const { next, dup, reset } = await searchParams;
  const locale = await getLocale();
  return (
    <AuthShell
      title={pick(locale, {
        ko: "로그인",
        en: "Log in",
        zh: "登录",
        ja: "ログイン",
        it: "Accedi",
        fr: "Se connecter",
        es: "Iniciar sesión",
      })}
      subtitle={pick(locale, {
        ko: "이메일과 비밀번호로 GCM 대시보드에 접속합니다.",
        en: "Access the GCM dashboard with your email and password.",
        zh: "使用电子邮件和密码访问 GCM 控制面板。",
        ja: "メールとパスワードで GCM ダッシュボードにアクセスします。",
        it: "Accedi alla dashboard GCM con la tua email e password.",
        fr: "Accédez au tableau de bord GCM avec votre e-mail et votre mot de passe.",
        es: "Accede al panel de GCM con tu correo electrónico y contraseña.",
      })}
      footer={pick(locale, {
        ko: "문의: tennis.gcm@gmail.com",
        en: "Contact: tennis.gcm@gmail.com",
        zh: "联系: tennis.gcm@gmail.com",
        ja: "お問い合わせ: tennis.gcm@gmail.com",
        it: "Contatti: tennis.gcm@gmail.com",
        fr: "Contact : tennis.gcm@gmail.com",
        es: "Contacto: tennis.gcm@gmail.com",
      })}
      backgroundImage="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      {dup ? (
        <p className="mb-5 rounded-lg border border-court/40 bg-court/10 px-4 py-3 text-sm text-court-bright">
          {pick(locale, {
            ko: "이미 가입된 전화번호입니다. 처음 가입하신 방법(이메일 · 카카오 · 네이버)으로 로그인해 주세요.",
            en: "This phone number is already registered. Please log in using the method you originally signed up with (email, Kakao, or Naver).",
            zh: "该电话号码已注册。请使用您最初注册的方式（电子邮件、Kakao 或 Naver）登录。",
            ja: "この電話番号はすでに登録されています。最初に登録された方法（メール・Kakao・Naver）でログインしてください。",
            it: "Questo numero di telefono è già registrato. Accedi con il metodo che hai usato originariamente per registrarti (email, Kakao o Naver).",
            fr: "Ce numéro de téléphone est déjà enregistré. Connectez-vous avec la méthode que vous avez utilisée lors de votre inscription (e-mail, Kakao ou Naver).",
            es: "Este número de teléfono ya está registrado. Inicia sesión con el método que usaste originalmente para registrarte (correo electrónico, Kakao o Naver).",
          })}
        </p>
      ) : null}
      {reset ? (
        <p className="mb-5 rounded-lg border border-court/40 bg-court/10 px-4 py-3 text-sm text-court-bright">
          {pick(locale, {
            ko: "비밀번호가 변경되었습니다. 새 비밀번호로 로그인해 주세요.",
            en: "Your password has been changed. Please log in with your new password.",
            zh: "密码已修改。请使用新密码登录。",
            ja: "パスワードが変更されました。新しいパスワードでログインしてください。",
            it: "La tua password è stata modificata. Accedi con la nuova password.",
            fr: "Votre mot de passe a été modifié. Connectez-vous avec votre nouveau mot de passe.",
            es: "Tu contraseña ha sido modificada. Inicia sesión con tu nueva contraseña.",
          })}
        </p>
      ) : null}
      <LoginForm next={next} />
    </AuthShell>
  );
}
