package until;

import java.math.BigInteger;
import java.security.MessageDigest;

public class MD5 {
	public String hash(String input) {
		if (input == null) {
			throw new IllegalArgumentException("Input cannot be null");
		}
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");

			byte[] messageDigest = md.digest(input.getBytes());

			BigInteger number = new BigInteger(1, messageDigest);
			String hashText = number.toString(16);

			return hashText;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}

	public static void main(String[] args) {
		MD5 md5 = new MD5();
		System.out.println(md5.hash("thuan"));
	}
}
